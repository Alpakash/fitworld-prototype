import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import ApolloClient from 'apollo-boost'
import AsyncStorage from '@react-native-community/async-storage'
import _ from 'lodash'
import SplashScreen from "./screens/SplashScreen";
import IntroScreen from "./screens/IntroScreen";

class App extends React.Component<any, any> {
  state = {
    cachePersisted: false,
    // isSignedOut: null
  };

  componentDidMount(): void {
    Promise.all([
      // AsyncStorage.clear(),
      client.setupClient()
    ])
      .then(x => {
        // let token = ""; // get out of cache/state, since at this point it is persisted
        // axios.defaults.headers = {
        //   Authorization: `Bearer ${token}`
        // }
        this.setState({ cachePersisted: true })
      })
      .catch(err => console.log(err))
  }

      /*
          1. Component: IntroProcess
               - Intro
               - Init
                   - Locatie toestemming
                   - Maak account aan (token creation)
                   - Accepted, let's go!
                          - turn state IntroCompleted: true

          2. Component: HomeScreen
               - Load React-Router

         3. In App.tsx, IntroCompleted: true -> show HomeScreen component
      */

  render() {
    if (!this.state.cachePersisted) {
      return <SplashScreen/>
    } else {
      return (
        <ApolloProvider client={ client.getClient() }>
          <IntroScreen/>
        </ApolloProvider>
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
          getItem: async function(key: string, callback?: (error?: Error, result?: string) => void): Promise<string | null> {
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

