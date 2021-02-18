import type { ComponentSingleStyleConfig } from '@chakra-ui/theme'

import _sizes from '../foundations/sizes'

// const baseStyle = {
//   w: '100%',
//   mx: 'auto',
//   maxW: '60ch',
//   px: '1rem',
// }

const sizes = {
  ...Object.keys(_sizes.screen).reduce(
    // use screen width as size
    (acc, key) => ({
      ...acc,
      [key]: {
        maxW: `screen.${key}`,
      },
    }),
    {} as Record<string, { maxW: string }>,
  ),
}

export const Container: ComponentSingleStyleConfig = {
  // baseStyle,
  sizes,
}

export default Container
