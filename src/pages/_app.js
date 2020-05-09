import React from 'react'
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

const App = ({ Component, pageProps, router }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap" rel="stylesheet" />
      <link rel="shortcut icon" href="/img/favicon/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="128x128" href="/img/favicon/favicon-128.png" />
      <link rel="icon" type="image/png" sizes="152x152" href="/img/favicon/favicon-152.png" />
      <link rel="icon" type="image/png" sizes="167x167" href="/img/favicon/favicon-167.png" />
      <link rel="icon" type="image/png" sizes="180x180" href="/img/favicon/favicon-180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/favicon-192.png" />
      <link rel="icon" type="image/png" sizes="196x196" href="/img/favicon/favicon-196.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: 'https://tensharp.com',
        title: name,
        description,
        site_name: name,
      }}
    />

    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  </>
)


export default App
