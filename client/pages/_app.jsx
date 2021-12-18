import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';

import Layout from '../src/component/Layout';
import store from '../store'
import '../styles/globals.css'

axios.defaults.baseURL = 'http://localhost:5000'
const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
