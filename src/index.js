import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux' ;

// **** 리덕스 개발자 도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
  })

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>,
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
