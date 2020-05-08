import React, { Component } from 'react'
import styled from 'styled-components'
import { Animated, Dimensions, Easing, TouchableOpacity, View } from 'react-native'
import _ from 'lodash'

const { width } = Dimensions.get('window')

const Container = styled(View)<{ width: number }>`
background-color: ${ ({ theme }) => theme.background.white };
width: ${ props => props.width }px;
border-radius: 25px;
flex-direction: row;
`

const Switch = styled(Animated.View)`
background-color: black;
position: absolute;
border-radius: 26px;
`

const StyledButton = styled(TouchableOpacity)`
padding: 5px 20px;
align-items: center;
justify-content: center;
z-index: 1;
`

// De Toggle Component ook 2D maken met een Y-as
class Toggle extends Component<{ style?: object, elevation?: number, margin?: number}, {}> {
    state = {
        scrollAnim: new Animated.Value(0),
        widthAnim: new Animated.Value(0),
        heightAnim: new Animated.Value(0),
        currentIndex: 0
    }

    references: any[] = []
    private widths: number[] = []
    private heights: number[] = []
    private containerWidth: number = width

    componentDidMount(): void {
        setTimeout(() => {
            for (const ref of this.references) {
                ref.measure((x: number, y: number, width: number, height: number) => {
                    this.widths.push(width)
                    this.heights.push(height)

                    // calculate the total sum of this.widths
                    this.containerWidth = _.sum(this.widths)

                    this.setState({
                        widthAnim: new Animated.Value(this.widths[0]),
                        heightAnim: new Animated.Value(this.heights[0]),
                    })
                })
            }
        }, 500)
    }

    scroll = (index: number) => {
        let sum = 0;

        this.setState({
            currentIndex: { index }
        })

        // calculate the total width of the components before the clicked components
        for (let i = 0; i < index; i++) {
            sum += this.widths[i]
        }

        // set the value to the calculated width in const sum
        // the switch component will scroll to this position
        Animated.timing(this.state.scrollAnim, {
            toValue: sum,
            duration: 200 * (index === 0 ? 1 : index)
        }).start()

        // set value the width of the clicked component
        Animated.timing(this.state.widthAnim, {
            toValue: this.widths[index],
            easing: Easing.out(Easing.ease),
            duration: 200 * (index === 0 ? 1 : index)
        }).start()
    }

    render() {
        if (typeof this.props.children !== 'function') throw new Error('children should be function')
        const children = this.props.children({ currentIndex: this.state.currentIndex })
        if (children.length < 2) throw new Error('Toggle should have an array with 2 children');

        return (
            <>
                <Container width={ this.containerWidth }
                           style={ {
                               ...this.props.style,
                               elevation: this.props.elevation ?? 4,
                               margin: this.props.margin ?? 10
                           } }>
                    {
                        children
                            .map((x: any, index: number) =>
                                <StyledButton
                                    ref={ (ref: any) => {
                                        this.references.push(ref)
                                    } }
                                    onPress={ () => this.scroll(index) }
                                    key={ index }>
                                    { x(index, this.state.currentIndex) }
                                </StyledButton>
                            )
                    }

                    <Switch style={ {
                        // the Switch Component gets animated on the X-as with an animated value
                        transform: [{ translateX: this.state.scrollAnim }],
                        width: this.state.widthAnim,
                        height: this.state.heightAnim
                    } }/>
                </Container>
            </>
        )
    }
}

export default Toggle
