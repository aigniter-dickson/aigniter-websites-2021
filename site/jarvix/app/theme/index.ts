import {
  //
  extendTheme,
  ThemeConfig,
  // theme,
} from '@chakra-ui/react'

import * as components from './components'
import styles from './styles'

const direction: import('@chakra-ui/react').ThemeDirection = 'ltr'

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

export const overrides = {
  // ...theme,
  direction,
  // ...foundations,
  components: { ...components },
  styles: { ...styles },
  config: { ...config },
}

export default extendTheme(overrides)
