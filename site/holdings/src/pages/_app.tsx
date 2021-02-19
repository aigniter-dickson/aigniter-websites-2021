import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps /* , AppContext */ } from 'next/app'
import { TinaProvider, TinaCMS } from 'tinacms'

import theme from '../theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const cms = new TinaCMS({
    // enabled: process.env.NODE_ENV !== 'production',
    enabled: true,
    sidebar: true,
    toolbar: true,
    apis: {
      // git: new GitClient('http://localhost:3030/___tina'), // this could be the GitHub client
    },
  })

  return (
    <TinaProvider cms={cms}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </TinaProvider>
  )
}

export default MyApp
