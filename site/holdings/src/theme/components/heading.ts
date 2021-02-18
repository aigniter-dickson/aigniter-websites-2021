import type { ComponentSingleStyleConfig } from '@chakra-ui/theme'

export const Heading: ComponentSingleStyleConfig = {
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'semibold',
  },
  sizes: {
    heading: {
      fontSize: ['2', null, '1'],
      lineHeight: 'solid',
      fontWeight: 'bold',
    },
    subheading: {
      fontSize: ['2'],
      lineheight: 'title',
      fontWeight: 'light',
    },
    '1': {
      fontSize: ['1'],
      lineheight: 'title',
    },
    '2': {
      fontSize: ['2'],
      lineheight: 'title',
    },
    '3': {
      fontSize: ['3'],
      lineheight: 'title',
    },
    '4': {
      fontSize: ['4'],
      lineheight: 'title',
    },
    '5': {
      fontSize: ['5'],
      lineheight: 'title',
    },
    '6': {
      fontSize: ['6'],
      lineheight: 'title',
    },
    '7': {
      fontSize: ['7'],
      lineheight: 'title',
    },

    // default theme
    '4xl': {
      fontSize: ['6xl', null, '7xl'],
      lineHeight: 1,
    },
    '3xl': {
      fontSize: ['5xl', null, '6xl'],
      lineHeight: 1,
    },
    '2xl': {
      fontSize: ['4xl', null, '5xl'],
      lineHeight: [1.2, null, 1],
    },
    xl: {
      fontSize: ['3xl', null, '4xl'],
      lineHeight: [1.33, null, 1.2],
    },
    lg: {
      fontSize: ['2xl', null, '3xl'],
      lineHeight: [1.33, null, 1.2],
    },
    md: { fontSize: 'xl', lineHeight: 1.2 },
    sm: { fontSize: 'md', lineHeight: 1.2 },
    xs: { fontSize: 'sm', lineHeight: 1.2 },
  },
  defaultProps: {
    // size: 'xl',
  },
}

export default Heading
