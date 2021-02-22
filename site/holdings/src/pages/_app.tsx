import path from 'path'

import React, { useEffect } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
// import App from 'next/app'
import { NextGithubMediaStore } from 'next-tinacms-github'
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github'
import { TinaCMS, TinaProvider, ModalProvider } from 'tinacms'

import theme from '../theme'

// the following line will cause all content files to be available in a serverless context
path.resolve('./content/')

const MainLayout = ({ Component, pageProps, cms }: any) => {
  useEffect(() => {
    import('react-tinacms-date').then(({ DateFieldPlugin }) => {
      cms.plugins.add(DateFieldPlugin)
    })
    import('react-tinacms-editor').then(({ MarkdownFieldPlugin }) => {
      cms.plugins.add(MarkdownFieldPlugin)
    })
    import('react-tinacms-field-condition').then(
      ({ ConditionalFieldPlugin, ConditionalGroupFieldPlugin }) => {
        cms.plugins.add(ConditionalFieldPlugin)
        cms.plugins.add(ConditionalGroupFieldPlugin)
      },
    )
  }, [pageProps.preview])

  const enterEditMode = async () => {
    const token = localStorage.getItem('tinacms-github-token') || null
    const headers = new Headers()

    if (token) {
      headers.append('Authorization', `Bearer ${token}`)
    }

    const response = await fetch(`/api/preview`, { headers })
    const data = await response.json()

    if (response.status === 200) {
      window.location.reload()
    } else {
      throw new Error(data.message)
    }
  }

  const exitEditMode = () => {
    fetch(`/api/reset-preview`).then(() => {
      window.location.reload()
    })
  }

  return (
    <ChakraProvider theme={theme}>
      <TinaProvider cms={cms}>
        <ModalProvider>
          <TinacmsGithubProvider
            onLogin={enterEditMode}
            onLogout={exitEditMode}
            error={pageProps.error}
          >
            <Component {...pageProps} />
          </TinacmsGithubProvider>
        </ModalProvider>
      </TinaProvider>
    </ChakraProvider>
  )
}

const MyApp = ({ Component, pageProps }: import('next/app').AppProps) => {
  const githubClient = new GithubClient({
    proxy: '/api/proxy-github',
    authCallbackRoute: '/api/create-github-access-token',
    clientId: process.env.GITHUB_CLIENT_ID || '',
    baseRepoFullName: process.env.BASE_REPO_FULL_NAME || '',
    baseBranch: process.env.BASE_BRANCH, // e.g. 'master' or 'main' on newer repos
  })

  const tinaConfig: import('tinacms').TinaCMSConfig = {
    enabled: !!pageProps.preview,
    toolbar: !!pageProps.preview,
    sidebar: !!pageProps.preview && {
      position: 'displace',
    },
    apis: {
      github: githubClient,
    },
    media: new NextGithubMediaStore(githubClient),
    plugins: [],
  }

  const cms = React.useMemo(() => new TinaCMS(tinaConfig), [])

  return <MainLayout Component={Component} pageProps={pageProps} cms={cms} />
}

export default MyApp
