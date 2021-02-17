const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const baseUrl = ''
const i18n = {
  locales: ['en', 'zh-hk'],
  defaultLocale: 'zh-hk',
}

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: false,
  cleanUrls: true,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
  },
  // i18n,
})
