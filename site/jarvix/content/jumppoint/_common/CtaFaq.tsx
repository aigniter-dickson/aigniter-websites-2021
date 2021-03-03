import tw, { css, theme } from 'twin.macro'

import {
  Section,
  SectionTitle,
  SectionTitle4,
  SHeadingGp,
  SLayout,
} from '@/app/layouts/components/Section'
import LayoutContainer from '@/app/layouts/components/LayoutContainer'
import { FaqList, FaqItem } from './FaqList'
import { mdJsx } from '@/app/utils/mdJsx'
import faqData from '../faq/data'
import { ArrowForward } from '@/assets/icons/eva-icons'
import { Link, useRouter } from 'blitz'

export type CtaFaqProps = {
  faqCount?: number
}

export const CtaFaq = ({ faqCount }: CtaFaqProps = {}) => {
  const faqLink = {
    title: (
      <Link href="/jumppoint/faq">
        <a tw="justify-self-start flex items-center justify-center h-12 -ml-8 px-8 rounded-full text-brand-jmpt">
          <span>更多常見問題</span>
          <ArrowForward
            tw="pl-1 inline-block h-4"
            css={css({
              '& path': { fill: 'currentcolor' },
            })}
          />
        </a>
      </Link>
    ),
  }

  return (
    <Section>
      <LayoutContainer>
        <SLayout tw="py-24">
          <SHeadingGp tw="text-left md:text-left">
            <SectionTitle>常見問題</SectionTitle>
          </SHeadingGp>
          <FaqList
            items={[
              ...faqData.items.slice(0, faqCount || 5).map(({ title, content }) => ({
                title,
                children: mdJsx(content),
              })),
              faqLink,
            ]}
          />
        </SLayout>
      </LayoutContainer>
    </Section>
  )
}

export default CtaFaq
