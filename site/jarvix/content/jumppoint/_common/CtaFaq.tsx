import tw, { css, theme } from 'twin.macro'

import { useState } from 'react'
import { VStack } from '@/app/components/core/Stack'

import {
  Section,
  SectionTitle,
  SectionTitle4,
  SHeadingGp,
  SLayout,
} from '@/app/layouts/components/Section'
import LayoutContainer from '@/app/layouts/components/LayoutContainer'
import FaqList from './FaqList'
import { mdJsx } from '@/app/utils/mdJsx'

export const defaultFaqs = mdJsx

export const CtaFaq = () => {
  return (
    <Section>
      <LayoutContainer>
        <SLayout tw="py-24">
          <SHeadingGp tw="text-left md:text-left">
            <SectionTitle>常見問題</SectionTitle>
          </SHeadingGp>
          <FaqList />
        </SLayout>
      </LayoutContainer>
    </Section>
  )
}

export default CtaFaq
