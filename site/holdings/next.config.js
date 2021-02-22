require('dotenv').config()

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

const config = {
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    BASE_REPO_FULL_NAME: process.env.BASE_REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
  },
  poweredByHeader: false,
  trailingSlash: false, // TODO: change back to true if got redirect error
  cleanUrls: true,
  i18n,
}

module.exports = withBundleAnalyzer(config)
