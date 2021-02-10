import typography from '@twind/typography'
import { setup, strict } from 'twind'
import type * as Twind from 'twind'

// import * as colors from 'twind/colors'

const originalConfig = require('../../tailwind.config.js')

export const tailwindConfig: Twind.Configuration = {
  ...originalConfig,
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
  },
}

function _setup() {
  setup({
    ...tailwindConfig,
    ...(process.env.NODE_ENV === 'development' && {
      mode: strict,
    }),
  })
}

export { _setup as setup }
