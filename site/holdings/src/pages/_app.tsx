import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps /* , AppContext */ } from 'next/app'

import theme from '../theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
