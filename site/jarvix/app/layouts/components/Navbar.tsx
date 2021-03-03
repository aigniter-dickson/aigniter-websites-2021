import { Image, Link } from 'blitz'
import tw from 'twin.macro'

import Container from './LayoutContainer'

const Icon = (props: any) => <svg {...props}>{props.children}</svg>

// const Link = tw.a`flex-none flex items-center justify-center h-12 px-2`

export const Nav = () => (
  <nav tw="w-full flex items-center h-16">
    <Link href="/jumppoint">
      <a
        href="/jumppoint"
        tw="h-6 flex-none flex items-center justify-center px-2"
        css={{
          filter: 'invert(1)',
        }}
      >
        <img
          src="/images/jumppoint/jumppoint_logo_white.webp"
          height="44px"
          width="219px"
          alt="jumppoint"
          tw="h-full w-auto"
        />
        {/* <span tw="text-lg font-bold">jumppoint</span> */}
      </a>
    </Link>
    <hr tw="invisible flex-1" />
    {/* <Link tw="">Home</Link>
    <Link tw="">Portfolio</Link>
    <Link tw="">About</Link>
    <Link tw="">Contact</Link> */}
    {/* <div tw="">
      <div tw="flex-none">
        <a tw="">
          <Icon glyph="heart" tw="inline-block w-6 h-6 stroke-current" />
        </a>
      </div>
      <div tw="flex-none">
        <a tw="">
          <Icon glyph="search" tw="inline-block w-6 h-6 stroke-current" />
        </a>
      </div>
    </div> */}
  </nav>
)

export const Navbar = (props: any) => {
  const { tw, css, ...rest } = props
  return (
    <header tw="relative w-screen" {...rest}>
      <div tw="" />
      <Container tw="px-layout">
        <Nav />
      </Container>
    </header>
  )
}

// export const Navbar = () => <header>header</header>

export default Navbar
