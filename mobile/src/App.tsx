import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from './navigations/BottomNavigation'
import { ApolloProvider } from '@apollo/react-hooks'
import { Text, View } from 'react-native'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import ApolloClient from 'apollo-boost'
import AsyncStorage from '@react-native-community/async-storage'
import _ from 'lodash'

class App extends React.Component<any, any> {
  state = {
    cachePersisted: false
  }

  componentDidMount(): void {
    Promise.all([
      // AsyncStorage.clear(),
      client.setupClient()
    ])
      .then(x => {
        this.setState({ cachePersisted: true })
      })
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.cachePersisted) {
      return <View><Text>loading cache this should be some splash screen</Text></View>
    } else {
      return (
        <ApolloProvider client={ client.getClient() }>
          <NavigationContainer>
            <BottomNavigation/>
          </NavigationContainer>
        </ApolloProvider>
      )
    }
  }
}

export default App

class GraphQLClient {
  static whitelist = ['token']
  public client: any = undefined

  setupClient = async () => {
    const cache = new InMemoryCache()
    await persistCache({
      cache,
      //@ts-ignore
      storage:
        {
          ...AsyncStorage,
          getItem: async function(key: string, callback?: (error?: Error, result?: string) => void): Promise<string | null> {
            const obj = JSON.parse((await AsyncStorage.getItem.apply(this, [key])) ?? '{}') as unknown as { ROOT_QUERY: object }
            if (!obj) throw new Error('failed to get cache')
            const whitelistedObj = JSON.stringify({
              ROOT_QUERY: _.pick(obj.ROOT_QUERY, GraphQLClient.whitelist)
            })
            await AsyncStorage.setItem(key, whitelistedObj)
            return whitelistedObj
          }
        },
      debug: true
    })
    this.client = new ApolloClient({
      uri: 'https://swapi.graph.cool/',
      cache,
      clientState: {
        resolvers: {}
      }
    })
  }

  getClient = (): ApolloClient<any> => {
    return this.client
  }
}


export const client = new GraphQLClient()

