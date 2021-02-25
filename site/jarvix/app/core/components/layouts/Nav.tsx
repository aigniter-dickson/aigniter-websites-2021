import {
  //
  Box,
  Button,
  Center,
  Container,
  Flex,
  Text,
  HStack,
  Spacer,
  chakra,
} from '@chakra-ui/react'
import { Link } from 'blitz'
import React from 'react'
import JumppointLogo from '../JumppointLogo'

import Header from './Header'

type _WithChildren = {
  children?: import('react').ReactNode
}

// dimensions
export const h = '12'

export type NavLinkProps = Parameters<typeof NavLink>[0]

// export const NavLink = chakra(
//   (props: Parameters<typeof Link>[0]) => Link({ ...props, passHref: true }),
//   {
//     baseStyle: { h },
//   },
// )

export const NavLink = (props: Parameters<typeof Link>[0]) => (
  <Link {...props}>
    <Flex alignItems="stretch" sx={{ '& a': { display: 'block' } }}>
      {props.children}
    </Flex>
  </Link>
)

export type NavProps = _WithChildren & {
  logo?: import('react').ReactNode
  links: {
    logo: any
  }
}

export const Nav = () => {
  const NavLayout = ({ children }: _WithChildren) => (
    <Flex as="nav" alignItems="stretch" justifyContent="space-between" h={h} maxH={h}>
      {children}
    </Flex>
  )

  const NavLogo = () => (
    <NavLink href="https://google.com">
      <a>
        <JumppointLogo />
      </a>
    </NavLink>
  )

  return (
    <Header>
      <NavLayout>
        <NavLogo />
        <NavLink href="/">
          <a>hi</a>
        </NavLink>
      </NavLayout>
    </Header>
  )
}

export default Nav
