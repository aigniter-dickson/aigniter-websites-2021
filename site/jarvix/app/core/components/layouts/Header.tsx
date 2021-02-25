import {
  //
  Box,
  Container,
} from '@chakra-ui/react'

// Header

export namespace HeaderConst {
  export const header = 'header'
  export const maxW = 'container.lg'
}

export type HeaderProps = {
  children: import('react').ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  const H = HeaderConst

  return (
    <Box as={H.header}>
      <Container maxW={H.maxW}>{children}</Container>
    </Box>
  )
}

export default Header
