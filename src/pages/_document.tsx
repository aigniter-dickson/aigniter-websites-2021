import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {process.env.NODE_ENV === 'development' && (
            <script type="module" src="https://cdn.skypack.dev/twind/shim" />
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
