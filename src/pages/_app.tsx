import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps /* , AppContext */ } from 'next/app'

import { setup } from '@/utils/twind'

import '../styles/main.css'

import theme from '../theme'

setup() // setup twind

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
