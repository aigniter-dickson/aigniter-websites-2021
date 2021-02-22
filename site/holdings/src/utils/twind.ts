import { aspectRatio } from '@twind/aspect-ratio'
import typography from '@twind/typography'
import { setup } from 'twind'
import type * as Twind from 'twind'
import * as tailwindColors from 'twind/colors'

import { colors } from '@/constants'

// import * as colors from 'twind/colors'

export const tailwindConfig: Twind.Configuration = {
  darkMode: false,
  theme: {
    colors: {
      ...tailwindColors,
      ...colors,
    },
    extend: {
      screens: {
        xs: '384px',
      },
      colors: {
        ...tailwindColors,
        ...colors,
      },
    },
  },
  variants: {},

  // theme: {
  //   // colors,
  //   extend: {
  //     screens: {
  //       xs: '384px',
  //     },
  //     colors: {
  //       ...colors,
  //     },
  //   },
  // },
  plugins: {
    ...typography(),
    aspect: aspectRatio,
  },
}

function _setup() {
  setup({
    ...tailwindConfig,
    // ...(process.env.NODE_ENV === 'development' && {
    //   mode: strict,
    // }),
  })
}

export { _setup as setup }
