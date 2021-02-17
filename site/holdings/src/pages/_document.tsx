import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'

import { tailwindConfig } from '@/utils/twind'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {process.env.NODE_ENV === 'development' && (
            <>
              <script type="module" src="https://cdn.skypack.dev/twind/shim" />
              <script
                type="twind-config"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(tailwindConfig), // eslint-disable-line @typescript-eslint/naming-convention
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
