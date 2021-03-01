import Container from './LayoutContainer'

const Icon = (props: any) => <svg {...props}>{props.children}</svg>

export const Nav = () => (
  <nav className="navbar w-full">
    <div className="flex-none px-2 mx-2">
      <span className="text-lg font-bold">DaisyUI</span>
    </div>
    <div className="flex-1 px-2 mx-2">
      <div className="items-stretch hidden lg:flex">
        <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
        <a className="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
        <a className="btn btn-ghost btn-sm rounded-btn">About</a>
        <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
      </div>
    </div>
    <div className="flex-none">
      <a className="btn btn-square btn-ghost">
        <Icon glyph="heart" className="inline-block w-6 h-6 stroke-current" />
      </a>
    </div>
    <div className="flex-none">
      <a className="btn btn-square btn-ghost">
        <Icon glyph="search" className="inline-block w-6 h-6 stroke-current" />
      </a>
    </div>
  </nav>
)

export const N = (props: any) => (
  <header {...props} className={`relative w-screen bg-default ${props?.className || ''}`.trim()}>
    <div className="bg-" />
    <Container>
      <Nav />
    </Container>
  </header>
)

export const Navbar = () => <header>header</header>

export default Navbar
