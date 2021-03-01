import { AppProps, ErrorComponent, useRouter } from 'blitz'
import { ErrorBoundary } from 'react-error-boundary'
import tw, { css, theme } from 'twin.macro'
import { Global } from '@emotion/react'

import GlobalStyles from 'app/core/theme/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      resetKeys={[router.asPath]}
      // onReset={() => {
      //   // This ensures the Blitz useQuery hooks will automatically refetch
      //   // data any time you reset the error boundary
      //   queryCache.resetErrorBoundaries()
      // }}
    >
      {getLayout(
        <>
          {/* {process.env.NODE_ENV === 'development' && (
            <style jsx global>{`
              body:hover *:not(svg) {
                box-shadow: inset rgb(0, 255, 255) 0 0 0 0.5px, rgb(0, 255, 255) 0 0 0 0.5px;
              }
            `}</style>
          )} */}
          <GlobalStyles />
          <Global
            styles={css({
              body: tw`text-onSurface`,
            })}
          />
          <Component {...pageProps} />
        </>,
      )}
    </ErrorBoundary>
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
