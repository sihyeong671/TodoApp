import React from 'react';
import axios from 'axios';

import Layout from '../src/component/Layout';
import '../styles/globals.css'

axios.defaults.baseURL = 'http://localhost:5000'
const App = ({ Component, pageProps }) => {
  return (
    <Layout>

      <Component {...pageProps} />

    </Layout>
  )
}

export default App
