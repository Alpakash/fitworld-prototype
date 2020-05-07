import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import Splash from "./screens/Splash";
import Intro from "./screens/Intro/Intro";
import {client} from "./GraphQLClient";
import {Net} from "./util/Net";
import axios from "axios";
import {ThemeProvider} from "styled-components/native";
import theme from "fitworld-common/lib/common/src/theming/theme";

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
                        <Intro/>
                    </ApolloProvider>
                </ThemeProvider>
            )
        }
    }
}

export default App

class GraphQLClient {
    static whitelist = ['token'];
    public client: any = undefined;

    setupClient = async () => {
        const cache = new InMemoryCache();
        await persistCache({
            cache,
            //@ts-ignore
            storage:
                {
                    ...AsyncStorage,
                    getItem: async function (key: string, callback?: (error?: Error, result?: string) => void): Promise<string | null> {
                        const obj = JSON.parse((await AsyncStorage.getItem(key)) ?? "{}") as unknown as { ROOT_QUERY: object };
                        if (!obj) throw new Error('failed to get cache');
                        const whitelistedObj = JSON.stringify({
                            ROOT_QUERY: _.pick(obj.ROOT_QUERY, GraphQLClient.whitelist)
                        });
                        await AsyncStorage.setItem(key, whitelistedObj);
                        return whitelistedObj;
                    }
                }
        });

        this.client = new ApolloClient({
            uri: 'https://api.fitworld.io/graphql',
            cache,
            clientState: {
                resolvers: {}
            }
        })
    };

    getClient = (): ApolloClient<any> => {
        return this.client
    }
}

export const client = new GraphQLClient();

