const isDev = process.env.NODE_ENV !== 'production'

const i18n = {
  locales: ['en', 'zh-hk'],
  defaultLocale: 'zh-hk',
  ...(isDev && {
    localeDetection: false,
  }),
}

const config = {
  poweredByHeader: false,
  trailingSlash: false, // TODO: change back to true if got redirect error
  cleanUrls: true,
  i18n,
}

const webpack = (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config

  // TODO: check if 'eval-cheap-module-source-map' is really needed
  // https://github.com/vercel/next.js/blob/master/errors/improper-devtool.md
  if (dev) {
    Object.defineProperty(config, 'devtool', {
      get: () => 'eval-cheap-module-source-map',
      set: () => {},
    })
  }

  return config
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = isDev
  ? {
      // dev config
      ...config,
      webpack,
    }
  : withBundleAnalyzer(config)
