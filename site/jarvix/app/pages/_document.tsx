import { Document, Html, DocumentHead, Main, BlitzScript } from 'blitz'
import { extractCritical } from '@emotion/server'

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  static async getInitialProps(ctx: import('blitz').DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const page = await ctx.renderPage()
    const styles = extractCritical(page.html)
    return { ...initialProps, ...page, ...styles }
  }

  render() {
    return (
      <Html lang="en">
        <DocumentHead>
          {() => {
            const _ids = (this as any)?.props?.ids
            const _css = (this as any)?.props?.css
            return (
              _ids &&
              _css && (
                <style
                  data-emotion-css={_ids.join(' ')}
                  dangerouslySetInnerHTML={{ __html: _css }}
                />
              )
            )
          }}
        </DocumentHead>
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
