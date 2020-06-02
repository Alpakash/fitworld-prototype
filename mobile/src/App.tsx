import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import {client} from "./GraphQLClient";
import {ThemeProvider} from "styled-components/native";
import theme from "fitworld-common/lib/common/src/theming/theme";
import AppNavigation from "./navigations/AppNavigation";
import SplashScreen from 'react-native-splash-screen'
import {RootContext} from './contexts/RootContext';
import {Dimensions, View} from "react-native";


class App extends React.Component<any, any> {
    state = {
        cachePersisted: false,
    };

    hydrateStore = async (preHide: () => void) => {
        client.setupClient()
            .then(stored => {
                this.setState({cachePersisted: true}, () => {
                    preHide();
                    SplashScreen.hide();
                });
            })
            .catch(err => console.log(err))
    };

    componentDidMount(): void {
        this.hydrateStore(() => {
        });
    }

    render() {
        if (!this.state.cachePersisted) {
            // splash screen on android-level covers us so no need to render anything
            return null;
        } else {
            const {width, height} =  Dimensions.get("window");
            return (
                <RootContext.Provider value={{
                    // DO NOT USE UNLESS YOU KNOW WHAT YOU'RE DOING
                    forceAppReRender: () => {
                        this.hydrateStore(() => {
                            this.forceUpdate();
                        })
                    },
                    dimensions: {
                        height,
                        width
                    }
                }}>
                        <ThemeProvider theme={theme}>
                            <ApolloProvider client={client.getClient()}>
                                <AppNavigation/>
                            </ApolloProvider>
                        </ThemeProvider>
                </RootContext.Provider>
            )
        }
    }
}

export default App
