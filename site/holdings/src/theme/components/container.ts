import { ComponentSingleStyleConfig } from '@chakra-ui/theme'

import _sizes from '../foundations/sizes'

const baseStyle = {
  w: '100%',
  mx: 'auto',
  maxW: '60ch',
  px: '1rem',
}

const sizes = {
  ...Object.entries(_sizes.screen).reduce(
    // use screen width as size
    (acc, [key, val]) => ({
      ...acc,
      [key]: {
        maxW: val,
      },
    }),
    {} as Record<string, { maxW: string }>,
  ),
}

export const Container = {
  baseStyle,
  sizes,
} as ComponentSingleStyleConfig

export default Container
