import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkReact from 'remark-react'

export const mdJsx = (markdown: string): import('react').ReactNode =>
  unified()
    .use(remarkParse)
    .use(remarkReact as any)
    .processSync(markdown).result as any
