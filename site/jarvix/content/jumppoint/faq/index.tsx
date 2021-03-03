import { HStack, VStack } from 'app/components/core/Stack'
import LayoutContainer from 'app/layouts/components/LayoutContainer'
import Layout from 'app/layouts/Layout'
import tw, { css, theme } from 'twin.macro'
import { Image, Link, useRouter } from 'blitz'

import {
  Section,
  SLayout,
  SHeadingGp,
  SectionTitle,
  SectionTitle2,
  SectionTitle3,
  SectionTitle4,
} from 'app/layouts/components/Section'

import { FaqList } from '../_common/FaqList'

import faqData from '../faq/data'
import { mdJsx } from '@/app/utils/mdJsx'

const Faq: import('blitz').BlitzPage = () => {
  return (
    <>
      <Section tw="overflow-hidden bg-brand-jmpt text-white">
        <LayoutContainer>
          <SLayout tw="py-24">
            <SHeadingGp tw="text-left md:text-left">
              <SectionTitle tw="text-current!">jumppoint 常見問題</SectionTitle>
            </SHeadingGp>
          </SLayout>
        </LayoutContainer>
      </Section>
      <Section>
        <LayoutContainer>
          <SLayout tw="py-24">
            {/* <SHeadingGp tw="text-left md:text-left">
              <SectionTitle>jumppoint常見問題</SectionTitle>
            </SHeadingGp> */}
            <FaqList
              items={faqData.items.map(({ title, content }) => ({
                title,
                children: mdJsx(content),
              }))}
            />
          </SLayout>
        </LayoutContainer>
      </Section>
    </>
  )
}

Faq.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Faq
