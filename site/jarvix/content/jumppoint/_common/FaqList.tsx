import tw, { css, theme } from 'twin.macro'

import { useState } from 'react'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import remarkReact from 'remark-react'

import { VStack } from '@/app/components/core/Stack'
import {
  Section,
  SectionTitle,
  SectionTitle4,
  SHeadingGp,
  SLayout,
} from '@/app/layouts/components/Section'
import LayoutContainer from '@/app/layouts/components/LayoutContainer'
import { ArrowForward } from '@/assets/icons/eva-icons'
import unified from 'unified'
import remarkParse from 'remark-parse'

export type FaqItemProps = import('react').PropsWithChildren<{
  title: import('react').ReactNode
}>

export const FaqItem = ({ title, children }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button
      type="button"
      aria-label="Open item"
      title="Open item"
      tw="block w-full py-4 focus:outline-none text-left"
      onClick={() => setIsOpen(!isOpen)}
    >
      <VStack tw="gap-4">
        <div tw="flex items-center justify-between h-8 w-full">
          <SectionTitle4>{title}</SectionTitle4>
          <div tw="flex items-center justify-center w-8 h-8">
            {children && (
              <svg
                viewBox="0 0 24 24"
                css={[
                  tw`w-3 text-gray-600 transition-transform duration-200`,
                  isOpen && tw`transform rotate-180`,
                ]}
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="2,7 12,17 22,7"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        {children && (
          <div css={isOpen || tw`hidden`}>
            <p tw="text-gray-700">{children}</p>
          </div>
        )}
      </VStack>
    </button>
  )
}

export type FaqListrops = {
  items?: FaqItemProps
}

// export async function getStaticProps() {
//   const source = 'Some **mdx** text, with a component <Heading />'
//   const mdxSource = await renderToString(source, {})
//   return { props: { source: mdxSource } }
// }

// function getComponent(mdxSource: import('next-mdx-remote/types').MdxRemote.Source) {
//   return hydrate(mdxSource)
// }

export const FaqList = ({ items }: FaqListrops = {}) => {
  return (
    <div tw="divide-y">
      {
        unified()
          .use(remarkParse)
          .use(remarkReact as any)
          .processSync('- markdown').result
      }
      <FaqItem title="問題 1 ?">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem
        aperiam, eaque ipsa quae.
      </FaqItem>
      <FaqItem title="問題 2 ?">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem
        aperiam, eaque ipsa quae.
      </FaqItem>
      <FaqItem title="問題 3 ?">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem
        aperiam, eaque ipsa quae.
      </FaqItem>
      <FaqItem title="問題 4 ?">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem
        aperiam, eaque ipsa quae.
      </FaqItem>
      <FaqItem
        title={
          <span tw="justify-self-start flex items-center justify-center h-12 -ml-8 px-8 rounded-full text-brand-jmpt">
            <span>更多常見問題</span>
            <ArrowForward
              tw="pl-1 inline-block h-4"
              css={css({
                '& path': { fill: 'currentcolor' },
              })}
            />
          </span>
        }
      />
    </div>
  )
}

export default FaqList
