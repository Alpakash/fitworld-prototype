import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from "./navigations/BottomNavigation"
import { ApolloProvider } from '@apollo/react-hooks'
import { Text, View } from 'react-native'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import ApolloClient from 'apollo-boost'
import AsyncStorage, { AsyncStorageStatic } from '@react-native-community/async-storage'
import { PersistedData, PersistentStorage } from 'apollo-cache-persist/types'
import _ from 'lodash'
import { StorageHandlerImplementations } from '../../common/src/StorageHandlerImplementations'

class App extends React.Component<any, any> {
    state = {
        cachePersisted: false
    };

    componentDidMount(): void {
        client.setupClient()
            .then(x => {
              this.setState({ cachePersisted: true })
            })
            .catch(err => console.log(err));
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
export default App;

class GraphQLClient {
  public client: any = undefined;
  static whitelist = ["token"];
  static storage: AsyncStorageStatic = AsyncStorage;

  checkIfStorageIsSet = () => {
    if (!GraphQLClient.storage) {
      throw new Error("storage is not set");
    } else if (GraphQLClient.whitelist.length == 0) {
      console.warn("whitelist not set on storage layer, going to persist all data (including queries)");
    }
  }

  private async setupCacheStorage<T> (): Promise<PersistentStorage<T>>  {
    return {
      getItem: (key): any => {
        this.checkIfStorageIsSet();
          return AsyncStorage.getItem(key) as any;
      },
      removeItem: key => {
        this.checkIfStorageIsSet();
        return AsyncStorage.removeItem(key)
      },
      setItem: (key, data: T) => {
        this.checkIfStorageIsSet();
        // @ts-ignore
        let obj = data.ROOT_QUERY;
        if(GraphQLClient.whitelist.length > 0) {
          // @ts-ignore
          obj = _.pick(data.ROOT_QUERY, GraphQLClient.whitelist)
        }
        return AsyncStorage.setItem(key, JSON.stringify({
          ROOT_QUERY: obj
        }))
      }
    }
  }

  setupClient = async () => {
    const cache = new InMemoryCache();
    await persistCache({
      cache,
      serialize: false,
      storage: await this.setupCacheStorage<PersistedData<any>>(),
      debug: true
    });
    this.client = new ApolloClient({
      uri: 'https://swapi.graph.cool/',
      cache,
      clientState: {
        resolvers: {}
      }
    })
  };

  getClient = (): ApolloClient<any> => {
    return this.client
  };
}

export const client = new GraphQLClient();

