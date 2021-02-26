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
  ListItem,
  List,
} from '@chakra-ui/react'
import { Link } from 'blitz'
import React from 'react'
import JumppointLogo from '../JumppointLogo'

import Header from './Header'

type _WithChildren = {
  children?: import('react').ReactNode
}

// dimensions
const h = '12'

export const NavDimensions = {
  h,
}

export type NavLinkProps = Parameters<typeof NavLink>[0]

export const NavLink = chakra(
  (props: Parameters<typeof Link>[0]) => Link({ ...props, passHref: true }),
  {
    baseStyle: { h },
  },
)

// export const NavItem = (props: Parameters<typeof Flex>[0]) => (
//   <Flex alignItems="stretch" h="full" sx={{ '& a': { display: 'block' } }} {...props}>
//     {props.children}
//   </Flex>
// )

export const NavItem = ListItem

// export const NavLink = chakra(Link)

export type NavProps = _WithChildren & {
  logo?: import('react').ReactNode
  links: {
    logo: any
  }
}

export const NavLayout = chakra(({ children }: _WithChildren) => (
  <Flex as="nav" alignItems="stretch" justifyContent="space-between" h={h} maxH={h}>
    {children}
  </Flex>
))

export const Nav = chakra(() => {
  // const NavLink = Link

  // const NavLogo = () => (
  //   // <NavItem as="a">
  //   <Link href="https://google.com" passHref>
  //     <JumppointLogo />
  //   </Link>
  //   // </NavItem>
  // )

  return (
    <Header>
      <NavLayout>
        <NavLink href="https://google.com" passHref>
          <JumppointLogo />
        </NavLink>
        {/* <List>
          <ListItem>
            <NavLogo />
          </ListItem>
        </List> */}
      </NavLayout>
    </Header>
  )
})

export default Nav
