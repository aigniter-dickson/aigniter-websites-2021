import {
  //
  extendTheme,
  ThemeConfig,
  ThemeDirection,
} from '@chakra-ui/react'

import * as components from './components'
import foundations from './foundations'
import styles from './styles'

const direction = 'ltr' as ThemeDirection

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

export const overrides = {
  direction,
  ...foundations,
  components: { ...components },
  styles: { ...styles },
  config: { ...config },
}

export default extendTheme(overrides)
