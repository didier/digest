import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { motion, AnimatePresence } from 'framer-motion'

// Styles
import '../styles/main.scss'

const name = 'Digest'
const description = `News you might've missed`
const title = `${name} — ${description}`

// <Component/> returns the component it self
// pageProps returns the props you use to in that component. It can be any data
// router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
// exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered


const App = ({ Component, pageProps, router }) => {


  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap" rel="stylesheet" />
        {/* PWA */}
        <link rel="shortcut icon" href="./assets/favicon-32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./assets/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./assets/favicon-16x16.png" />
        <meta name="msapplication-config" content="./assets/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
        <link rel='manifest' href='assets/manifest.json' />
        <link rel="manifest" href="assets/site.webmanifest" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: 'https://digest-delta.now.sh',
          title: name,
          description,
          site_name: name,
        }}
      />
      {/* TODO: Add install prompt */}

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}


export default App
