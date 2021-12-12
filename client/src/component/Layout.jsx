import React, { useState } from 'react'
import { Header, Icon, Menu, Segment } from 'semantic-ui-react'
import Link from 'next/link'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css';


const Nav = () => (
  <Header as='h2'>
    <Icon name='laptop'/>
    <Header.Content>My web</Header.Content>
  </Header>
)


const Layout = ({children}) => {
  
  return(
    <>
      <Head>
        <title>My web</title>
        <meta keyword="My webpage by Nexy js"></meta>
        <meta content="My webpage by Nexy js"></meta>
      </Head>

      <Nav></Nav>
      
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
      </ul>
      {children}
    </>
  )
}

export default Layout;