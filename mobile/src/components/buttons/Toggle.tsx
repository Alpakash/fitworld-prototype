import React, {Component} from 'react';
import styled from "styled-components/native";
import {Animated, Dimensions, Easing, TouchableOpacity, View} from "react-native";

const {width} = Dimensions.get("window");

const Container = styled(View)`
width: ${width}px;
min-height: 50px;
margin-top: 20px;
background-color: lightgrey;
border-radius: 26px;
flex-direction: row;
justify-content: space-between;
align-content: space-between;
`;

const Switch = styled(Animated.View)`
background-color: blue;
position: absolute;
opacity: 0.5;
border-radius: 26px;
`;

const StyledButton = styled(TouchableOpacity)`
flex:auto;
max-width: 150px;
padding: 10px;
align-items: center;
justify-content: center;
`;

// 1. op basis van de reference width de animation
// done;

// 2. de width aanpassen op basis van component text
// done;

// 3. de Animated.view shape en kleur veranderen op basis van reference animation
//

// 4. de Toggle ook 2D maken, gebruik de Y-as; example:
// o o x o
// o o
// o x

class Toggle extends Component {
    references: any[] = [];
    state = {
        scrollAnim: new Animated.Value(0),
        widthAnim: new Animated.Value(0),
        heightAnim: new Animated.Value(0)
    };

    private widths: number[] = [];
    private heights: number[] = [];

    componentDidMount(): void {
        setTimeout(() => {
            for (const ref of this.references) {
                ref.measure((x: number, y: number, width: number, height: number) => {
                    this.widths.push(width);
                    this.heights.push(height);

                    this.setState({
                        widthAnim: new Animated.Value(this.widths[0]),
                        heightAnim: new Animated.Value(this.heights[0])
                    });
                });
            }
        }, 50);
    }


    scroll = (index: number) => {
        let sum = 0;

        for (let i = 0; i < index; i++) {
            sum += this.widths[i];
        }

        Animated.timing(this.state.scrollAnim, {
            toValue: sum,
            duration: 200 * (index === 0 ? 1 : index),
        }).start();

        Animated.timing(this.state.widthAnim, {
            toValue: this.widths[index],
            easing: Easing.out(Easing.exp)
        }).start();
    };

    render() {
        if (!Array.isArray(this.props.children)) {
            throw new Error('You need to pass 2 or more children in the Toggle component.');
        }

        return (
            <>
                <Container>
                    {
                        this.props.children.map((x, index) =>
                            <StyledButton ref={(ref: any) => {
                                this.references.push(ref);
                            }} onPress={() => this.scroll(index)} key={index}>
                                {x}
                            </StyledButton>)
                    }
                    <Switch style={{
                        transform: [{translateX: this.state.scrollAnim}],
                        width: this.state.widthAnim,
                        height: this.state.heightAnim
                    }}/>
                </Container>
            </>
        );
    }
}

export default Toggle;
