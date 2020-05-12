import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import Splash from "./screens/Splash";
import Intro from "./screens/Intro/Intro";
import {client} from "./GraphQLClient";
import {Net} from "./util/Net";
import axios from "axios";
import {ThemeProvider} from "styled-components/native";
import theme from "fitworld-common/lib/common/src/theming/theme";
import Home from "./screens/Home";

class App extends React.Component<any, any> {
    state = {
        cachePersisted: false,
    };

    componentDidMount(): void {
        client.setupClient()
            .then(stored => {
                Net.http = axios.create({
                    ...Net.baseConf,
                    headers: {
                        Authorization: `Bearer ${stored.token}`
                    }
                });
                this.setState({cachePersisted: true})
            })
            .catch(err => console.log(err))
    }

    render() {
        if (!this.state.cachePersisted) {
            return <Splash/>
        } else {
            return (
                <ThemeProvider theme={theme}>
                    <ApolloProvider client={client.getClient()}>
                        <Home/>
                    </ApolloProvider>
                </ThemeProvider>
            )
        }
    }
}

export default App
