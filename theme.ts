import {
  theme as chakraTheme,
  extendTheme,
  ChakraTheme,
} from '@chakra-ui/react'

const config: ChakraTheme['config'] = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  ...chakraTheme,
  config,
})

export default theme
