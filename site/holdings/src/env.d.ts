declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [_: string]: string | undefined
      GITHUB_CLIENT_ID?: string
      GITHUB_CLIENT_SECRET?: string
      BASE_REPO_FULL_NAME?: string
      BASE_BRANCH?: string
      SIGNING_KEY?: string
    }
  }
}
