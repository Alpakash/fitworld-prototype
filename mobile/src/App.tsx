import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import {client} from "./GraphQLClient";
import {ThemeProvider} from "styled-components/native";
import theme from "fitworld-common/lib/common/src/theming/theme";
import AppNavigation from "./navigations/AppNavigation";
import SplashScreen from 'react-native-splash-screen'
import {RootContext, rootContextDefaultState} from './contexts/RootContext';


class App extends React.Component<any, any> {
    state = {
        cachePersisted: false,
    };

    componentDidMount(): void {
        client.setupClient()
            .then(stored => {
                this.setState({cachePersisted: true}, () => {
                    SplashScreen.hide();
                });
            })
            .catch(err => console.log(err))
    }

    render() {
        if (!this.state.cachePersisted) {
            // splash screen on android-level covers us so no need to render anything
            return null;
        } else {
            return (
                <RootContext.Provider value={rootContextDefaultState}>
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
