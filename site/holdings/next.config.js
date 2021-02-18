const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const i18n = {
  ...(process.env.NODE_ENV !== 'production' && {
    localeDetection: false,
  }),
  locales: ['en', 'zh-hk'],
  defaultLocale: 'zh-hk',
}

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: false, // TODO: change back to true if got redirect error
  cleanUrls: true,
  i18n,
})
