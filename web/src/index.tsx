import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import { Storage } from 'fitworld-common/lib/Storage'

class Main extends React.Component {
  render() {
    return (
      <ThemeProvider theme={ {} }>
        <ApolloProvider client={ client.getClient() }>
          <App/>
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}

class GraphQLClient {
  private client: any = undefined;

  setupClient = async () => {
    const cache = new InMemoryCache();
    await persistCache({
      cache,
      serialize: false,
      storage: new Storage()
    });
    this.client = new ApolloClient({
      uri: 'https://swapi.graph.cool/',
      cache
    })
  };

  getClient = (): ApolloClient<any> => {
    return this.client
  };
}

export const client = new GraphQLClient();

(async () => {
  await client.setupClient();
  ReactDOM.render(
    <Main/>, document.getElementById('root'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister()
})();
