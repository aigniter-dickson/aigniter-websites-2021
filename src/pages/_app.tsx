import React from 'react'

import { AppProps } from 'next/app'

import { setup } from '@/utils/twind'

import '../styles/main.css'

setup() // setup twind

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
