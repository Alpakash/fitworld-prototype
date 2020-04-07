import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from './navigations/BottomNavigation'
import { ApolloProvider } from '@apollo/react-hooks'
import { Text, View } from 'react-native'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import ApolloClient from 'apollo-boost'
import AsyncStorage, { AsyncStorageStatic } from '@react-native-community/async-storage'
import { PersistentStorage } from 'apollo-cache-persist/types'
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
  static storage: AsyncStorageStatic = AsyncStorage
  public client: any = undefined

  checkIfStorageIsSet = () => {
    if (!GraphQLClient.storage) {
      throw new Error('storage is not set')
    } else if (GraphQLClient.whitelist.length == 0) {
      console.warn('whitelist not set on storage layer, going to persist all data (including queries)')
    }
  }

  setupClient = async () => {
    const cache = new InMemoryCache()
    await persistCache({
      cache,
      // serialize: false,
      //@ts-ignore
      storage: {...AsyncStorage, setItem: function(key, data) {
        console.log(data, key);

        // _.pick
          //@ts-ignore
          return AsyncStorage.setItem.apply(this, [key, data]);
        }},
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

  private async setupCacheStorage<T>(): Promise<PersistentStorage<T>> {
    return {
      getItem: async(key): Promise<any> => {
        this.checkIfStorageIsSet()
        console.log("1", await AsyncStorage.getItem(key));
        return await AsyncStorage.getItem(key)
      },
      removeItem: async(key) => {
        this.checkIfStorageIsSet()
        return await AsyncStorage.removeItem(key)
      },
      setItem: async (key, data: any) => {
        this.checkIfStorageIsSet()
        let str = "";
        data = Object.keys(data).map((x) => str += data[x]);
        // @ts-ignore
        let obj = data.ROOT_QUERY
        if (GraphQLClient.whitelist.length > 0) {
          // @ts-ignore
          obj = _.pick(data.ROOT_QUERY, GraphQLClient.whitelist)
        }
        return await AsyncStorage.setItem(key, JSON.stringify({
          ROOT_QUERY: obj
        }))
      }
    }
  }
}

export const client = new GraphQLClient()

