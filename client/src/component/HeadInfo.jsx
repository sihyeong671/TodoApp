import React from 'react'
import Head from 'next/head'
const HeadInfo = ({title, keyword, contents}) => {
  return(
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}/>
      <meta contents={contents}/>
    </Head>
  )
}


HeadInfo.defaultProps={
  title: 'My Web',
  keyword: 'My Web by Next js',
  contents: 'test'
}

export default HeadInfo;