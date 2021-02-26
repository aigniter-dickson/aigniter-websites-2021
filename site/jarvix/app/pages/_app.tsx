import { AppProps, ErrorComponent, useRouter } from 'blitz'
// import { queryCache } from 'react-query'

import theme from '@chakra-ui/theme'
import { ChakraProvider } from '@chakra-ui/react'

// # Components
import { ErrorBoundary } from 'react-error-boundary'

// # postcss stylesheets
import 'app/core/styles/app-base.css'
import 'app/core/styles/app-components.css'
import 'app/core/styles/app-utilities.css'

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()

  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary
        FallbackComponent={RootErrorFallback}
        resetKeys={[router.asPath]}
        // onReset={() => {
        //   // This ensures the Blitz useQuery hooks will automatically refetch
        //   // data any time you reset the error boundary
        //   queryCache.resetErrorBoundaries()
        // }}
      >
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </ChakraProvider>
  )
}

function RootErrorFallback({ error }: import('react-error-boundary').FallbackProps) {
  // if (error?.name === 'AuthenticationError') {
  //   return <LoginForm onSuccess={resetErrorBoundary} />
  // } else if (error?.name === 'AuthorizationError') {
  //   return (
  //     <ErrorComponent
  //       statusCode={(error as any).statusCode}
  //       title="Sorry, you are not authorized to access this"
  //     />
  //   )
  // } else {
  return (
    <ErrorComponent
      statusCode={(error as any)?.statusCode || 400}
      title={error?.message || error?.name}
    />
  )
  // }
}
