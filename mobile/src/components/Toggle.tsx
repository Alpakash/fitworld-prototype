import React, {Component} from 'react'
import styled from 'styled-components'
import {Animated, Dimensions, TouchableOpacity, View} from 'react-native'
import {RootContext} from "../contexts/RootContext";
import _ from "lodash";

const Container = styled(View)<{ width: number }>`
    background-color: ${({theme}) => theme.background.white};
    width: ${props => props.width}px;
    border-radius: 25px;
    flex-direction: row;
    margin: 13px 0;
`;

const Switch = styled(Animated.View)`
    background-color: black;
    position: absolute;
    border-radius: 26px;
`;

const StyledButton = styled(TouchableOpacity)`
    padding: 5px 20px;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

interface State {
    scrollAnim: any;
    widthAnim: undefined | Animated.Value;
    heightAnim: undefined | Animated.Value;
    currentIndex: number | { index: number };
    show: boolean
}

// De Toggle Component ook 2D maken met een Y-as
class Toggle extends Component<{ style?: object, elevation?: number, margin?: number }, State> {
    state = {
        scrollAnim: new Animated.Value(0),
        widthAnim: undefined,
        heightAnim: undefined,
        currentIndex: 0,
        show: false,
    } as State;

    static contextType = RootContext;

    references: any[] = [];
    private widths: number[] = [];
    private heights: number[] = [];
    private containerWidth: number = Dimensions.get("window").width;

    measureItemWidths = () => {
        this.widths = [];
        this.heights = [];
        for (const ref of this.references) {
            ref.measure((x: number, y: number, width: number, height: number) => {
                if (width === undefined || height === undefined) {
                    console.log("[toggle] inconsistent behavior from requestAnimationFrame, falling back to recursion");
                    return setTimeout(this.measureItemWidths, 25);
                }
                this.widths.push(width);
                this.heights.push(height);

                // calculate the total sum of this.widths
                this.containerWidth = _.sum(this.widths);

                this.setState({
                    widthAnim: new Animated.Value(this.widths[0]),
                    heightAnim: new Animated.Value(this.heights[0]),
                    show: true,
                });
            })
        }
    };

    componentDidMount(): void {
        requestAnimationFrame(() => {
            this.measureItemWidths();
        })
    }

    componentWillUnmount(): void {
        this.references = [];
    }

    scroll = (index: number) => {
        if (!this.state.widthAnim) return;
        let sum = 0;

        this.setState({
            currentIndex: {index}
        });

        // calculate the total width of the components before the clicked components
        for (let i = 0; i < index; i++) {
            sum += this.widths[i]
        }

        // set the value to the calculated width in const sum
        // the switch component will scroll to this position
        Animated.spring(this.state.scrollAnim, {
            toValue: sum
        }).start();

        // set value the width of the clicked component
        Animated.spring(this.state.widthAnim, {
            toValue: this.widths[index],
            damping: 15
        }).start()
    };

    render() {
        if (typeof this.props.children !== 'function') throw new Error('children should be function');
        const children = this.props.children({currentIndex: this.state.currentIndex});
        if (children.length < 2) throw new Error('Toggle should have an array with 2 children');

        return (
            <>
                <Container
                    width={this.containerWidth}
                    style={{
                        ...this.props.style,
                        elevation: this.props.elevation ?? 4,
                        opacity: this.state.show ? 1 : 0
                    }}>
                    {
                        children
                            .map((x: any, index: number) =>
                                <StyledButton
                                    ref={(ref: any) => {
                                        this.references.push(ref)
                                    }}
                                    onPress={() => this.scroll(index)}
                                    key={index}>
                                    {x(index, this.state.currentIndex)}
                                </StyledButton>
                            )
                    }

                    {(!!this.state.widthAnim && !!this.state.heightAnim) && <Switch style={{
                        // the Switch Component gets animated on the X-as with an animated value
                        transform: [{translateX: this.state.scrollAnim}],
                        width: this.state.widthAnim,
                        height: this.state.heightAnim
                    }}/>}
                </Container>
            </>
        )
    }
}

export default Toggle
