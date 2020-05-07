import React, {Component} from 'react';
import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";

// TODO make this more abstract and re-usable for other anims.
export class BackgroundAnimation extends Component {
    private bgAnimation1: AnimatedLottieView | undefined;

    state = {
        reverse: false
    };

    componentDidMount(): void {
        this.bgAnimation1?.play();
    }

    render() {
        const {reverse} = this.state;
        return (
            <LottieView
                {...this.props}
                colorFilters={[
                    {
                        color: "#212121",
                        keypath: "animation_uninverted"
                    }
                ]}
                speed={reverse ? -0.8 : 0.8}
                ref={bgAnimation1 => this.bgAnimation1 = bgAnimation1 ?? undefined}
                loop={false}
                source={require('../../assets/lottie/shape_1_orange.json')}
                onAnimationFinish={() => {
                    this.setState({
                        reverse: !reverse
                    }, () => {
                        this.bgAnimation1?.play();
                    })
                }}
            />
        );
    }
}
