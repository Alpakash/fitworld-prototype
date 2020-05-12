import React, { Component } from 'react'
import styled from 'styled-components'
import { Animated, Dimensions, Easing, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import _ from 'lodash'

const {width} = Dimensions.get('window');

const Container = styled(View)<{width: number}>`
width: ${props => props.width }px;
min-height: 50px;
margin-top: 20px;
background-color: lightgrey;
border-radius: 26px;
flex-direction: row;
`;

const Switch = styled(Animated.View)`
background-color: black;
position: absolute;
border-radius: 26px;
`;

const StyledButton = styled(TouchableOpacity)`
padding: 0 20px;
align-items: center;
justify-content: center;
z-index: 1;
`;

// De Toggle ook 2D maken, gebruik de Y-as; example:
// o o x o
// o o
// o x

class Toggle extends Component {
    state = {
        scrollAnim: new Animated.Value(0),
        widthAnim: new Animated.Value(0),
        heightAnim: new Animated.Value(0),
        currentIndex: 0
    };

    references: any[] = [];
    private widths: number[] = [];
    private heights: number[] = [];
    private containerWidth: number = width;

    componentDidMount(): void {
        setTimeout(() => {
            for (const ref of this.references) {
                ref.measure((x: number, y: number, width: number, height: number) => {
                    this.widths.push(width);
                    this.heights.push(height);

                    // calculate the total sum of this.widths
                    this.containerWidth = _.sum(this.widths);

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
        });

        for (let i = 0; i < index; i++) {
            sum += this.widths[i]
        }

        Animated.timing(this.state.scrollAnim, {
            toValue: sum,
            duration: 200 * (index === 0 ? 1 : index)
        }).start();

        Animated.timing(this.state.widthAnim, {
            toValue: this.widths[index],
            easing: Easing.out(Easing.ease),
            duration: 200 * (index === 0 ? 1 : index)
        }).start()
    };

    render() {
        if (typeof this.props.children !== 'function') throw new Error('children should be function');
        const children = this.props.children({ currentIndex: this.state.currentIndex });

        return (
            <>
                <Container width={ this.containerWidth }>
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

                    <Switch style={{
                        transform: [{translateX: this.state.scrollAnim}],
                        width: this.state.widthAnim,
                        height: this.state.heightAnim
                    }}/>
                </Container>

                {/* box-shadow does not work, yelp plz */}
                <ScrollView style={{
                    backgroundColor: 'red',
                    elevation:4,
                    shadowOffset: { width: 5, height: 5 },
                    shadowColor: "grey",
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                }}>
                    <Text style={{
                        backgroundColor: 'red',
                        elevation:4,
                        shadowOffset: { width: 5, height: 5 },
                        shadowColor: "grey",
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                    }}>Hello</Text>
                </ScrollView>
            </>
        )
    }
}

export default Toggle
