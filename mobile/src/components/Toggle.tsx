import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import {Animated, TouchableOpacity, View} from 'react-native'
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

interface Props {
    style?: object,
    elevation?: number,
    margin?: number
}

const Toggle: React.FC<Props> = (props) => {
    let [scrollAnim, setScrollAnim] = useState(useRef(new Animated.Value(0)).current);
    let [widthAnim, setWidthAnim] = useState(useRef(new Animated.Value(0)).current);
    let [heightAnim, setHeightAnim] = useState(useRef(new Animated.Value(0)).current);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    const references: any[] = [];
    const widths: number[] = [];
    const heights: number[] = [];

    const recheckDimensionsOfItems = () => {
        for (const ref of references) {
            ref.measure((x: number, y: number, width: number, height: number) => {
                widths.push(width);
                heights.push(height);

                // calculate the total sum of this.widths
                setContainerWidth(_.sum(widths));

                setWidthAnim(new Animated.Value(widths[0]));
                setHeightAnim(new Animated.Value(heights[0]));
            })
        }
    };


    const scroll = (index: number) => {
        let sum = 0;
        setCurrentIndex(index);

        // calculate the total width of the components before the clicked components
        for (let i = 0; i < index; i++) {
            sum += widths[i]
        }

        // set the value to the calculated width in const sum
        // the switch component will scroll to this position
        Animated.spring(scrollAnim, {
            toValue: sum
        }).start();

        // set value the width of the clicked component
        Animated.spring(widthAnim, {
            toValue: widths[index],
            damping: 15
        }).start()
    };


    if (typeof props.children !== 'function') throw new Error('children should be function');
    const children = props.children({currentIndex: currentIndex});
    if (children.length < 2) throw new Error('Toggle should have an array with 2 children');

    return (
        <View
            onLayout={() => recheckDimensionsOfItems()}
        >
            <Container
                width={containerWidth}
                style={{
                    ...props.style,
                    elevation: props.elevation ?? 4
                }}>
                {
                    children
                        .map((x: any, index: number) =>
                            <StyledButton
                                ref={(ref: any) => {
                                    references.push(ref)
                                }}
                                onPress={() => scroll(index)}
                                key={index}>
                                {x(index, currentIndex)}
                            </StyledButton>
                        )
                }

                <Switch style={{
                    // the Switch Component gets animated on the X-as with an animated value
                    transform: [{translateX: scrollAnim}],
                    width: widthAnim,
                    height: heightAnim
                }}/>
            </Container>
        </View>
    )
};

export default Toggle
