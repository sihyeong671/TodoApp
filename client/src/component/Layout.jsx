import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import Link from 'next/link'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css';

const Header = () => {
  return(
    <>
      <h1>
        <Icon name='desktop'/>
        My WEB
      </h1>
    </>
  )
}


const Layout = ({children}) => {
  
  return(
    <>
      <Head>
        <title>My web</title>
        <meta keyword="My webpage by Nexy js"></meta>
        <meta content="My webpage by Nexy js"></meta>
      </Head>
      <Header></Header>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/todo'>
            <a>Todo</a>
          </Link>
        </li>
        <li>
          <Link href='/count'>
            <a>Count</a>
          </Link>
        </li>
      </ul>
      {children}
    </>
  )
}

export default Layout;