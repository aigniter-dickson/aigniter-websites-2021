import { Head } from 'blitz'
import Container from './components/LayoutContainer'
import Navbar from './components/Navbar'

type LayoutProps = Required<
  import('react').PropsWithChildren<{
    title?: string
  }>
>

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || ''}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative w-screen">{children}</main>
      <footer className="relative w-screen">
        <Container>
          <div>footer</div>
        </Container>
      </footer>
    </>
  )
}

export default Layout
