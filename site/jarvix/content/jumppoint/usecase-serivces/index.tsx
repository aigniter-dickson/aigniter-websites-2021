import { Image, Link } from 'blitz'
import { useRouter } from 'next/router'

import { HStack, VStack } from 'app/components/core/Stack'
import LayoutContainer from 'app/layouts/components/LayoutContainer'
import Layout from 'app/layouts/Layout'
import tw, { css, theme } from 'twin.macro'

import allPagesData from './data'

import {
  Section,
  SLayout,
  SHeadingGp,
  SectionTitle,
  SectionTitle2,
  SectionTitle3,
  SectionTitle4,
} from 'app/layouts/components/Section'

import CtaSignup from 'content/jumppoint/_common/CtaSignup'

// import { useState } from 'react'
// import { ArrowForward } from 'assets/icons/eva-icons'
import FaqList from '../_common/CtaFaq'
import Intro from '../_common/Intro'
import { string } from 'zod'
import PageSelect from './PageSelect'
import SectionSelect from './SectionSelect'

const ReferenceTimetable = () => (
  <Section>
    <LayoutContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle2 tw="text-center">jumppoint 速遞服務時間表</SectionTitle2>
        </SHeadingGp>
        <table
          tw="table-auto"
          css={{
            'th, td': tw`border border-brand-jmpt px-4 py-2`,
          }}
        >
          <thead>
            <tr tw="bg-brand-jmpt text-white">
              <th></th>
              <th>即日速遞</th>
              <th>標準快遞</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>截單時間</td>
              <td>早一天20:00</td>
              <td>沒有截單時間</td>
            </tr>
            <tr>
              <td>收件時間</td>
              <td>13:00前</td>
              <td>18:00前</td>
            </tr>
            <tr>
              <td>送達時間</td>
              <td>15:00-20:00</td>
              <td>3個配送日內送達</td>
            </tr>
          </tbody>
        </table>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const ReferencePriceTable = () => (
  <Section>
    <LayoutContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle2 tw="text-center">Jumppoint價目表</SectionTitle2>
          <SectionTitle4>標準快遞 Standard Delivery Service</SectionTitle4>
        </SHeadingGp>
        <table
          tw="table-auto"
          css={{
            'th, td': tw`border border-brand-jmpt px-4 py-2`,
          }}
        >
          <thead>
            <tr tw="bg-brand-jmpt text-white">
              <th>首1公斤</th>
              <th>1kg - 5kg</th>
              <th>續重每1公斤</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$28</td>
              <td>$32</td>
              <td>$2</td>
            </tr>
          </tbody>
        </table>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const PAGES = {
  get index() {
    return `${'use-cases'} / ${this['use-cases'].index}`
  },
  'use-cases': {
    get index() {
      return this.food
    },
    food: 'food',
    beauty: 'beauty',
    retail: 'retail',
    'cross-border': 'cross-border',
  },
  services: {
    get index() {
      return this['standard-delivery']
    },
    'standard-delivery': 'standard-delivery',
    'sameday-delivery': 'sameday-delivery',
    compare: 'compare',
    inventory: 'inventory',
  },
}

type PageSectionContent = {
  title: string
  content: any
  imageSrc?: string
}

type PageSection = {
  default: string
  contents: {
    title: string
    children?: PageSectionContent[]
  }
}

type PageData = {
  default: string
  sections: Record<
    string,
    {
      title: string
      sections?: Record<string, PageSection>
    }
  >
}

type PageCollection = {
  default: string
  pages: Record<string, PageData>
}

export type PageProps = {
  page: keyof typeof PAGES
}

const Page: import('blitz').BlitzPage<PageProps> = ({ page }) => {
  const { pages } = allPagesData
  const { pathname, query } = useRouter()
  const { slug } = query

  const activePageData = pages[page]

  const activeSectionData = activePageData?.sections?.[slug + '']

  const pageSelectOptions = Object.entries(pages).map(([key, { label, index }]) => ({
    key,
    label,
    href: [
      //
      ...pathname.split('/').slice(0, -2), // back two level
      key,
      index,
    ].join('/'),
    active: key === page,
  }))

  const sectionSelectOptions = Object.entries(activePageData?.sections).map(
    ([key, { title: label }]) => ({
      key,
      label,
      href: [
        //
        ...pathname.split('/').slice(0, -1), // back two level
        key,
      ].join('/'),
      active: key === slug,
    }),
  )

  // const pageData =

  return (
    <>
      {/* <Hero /> */}
      <Intro />
      <Section>
        <LayoutContainer>
          <SLayout tw="py-8 grid-cols-1">
            {/* select usecases or services  */}
            <PageSelect options={pageSelectOptions} />
            {/* sections */}
            <div tw="-mx-8 flex justify-center">
              <SectionSelect options={sectionSelectOptions} />
            </div>
            <VStack tw="gap-y-12">
              {activeSectionData.contents.map(({ title, content, imageSrc }, i) => (
                <VStack key={title + ''} tw="gap-y-6 gap-x-12 sm:(grid-cols-2 items-center)">
                  <div
                    tw="aspect-w-3 aspect-h-2"
                    css={
                      // alternate image position
                      i % 2 && tw`order-1`
                    }
                  >
                    <Image
                      //
                      src={imageSrc + ''}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      aria-hidden
                    />
                  </div>
                  <VStack tw="gap-4">
                    <SectionTitle2 tw="text-brand-jmpt text-center sm:text-left">
                      {title}
                    </SectionTitle2>
                    <p>{content}</p>
                  </VStack>
                </VStack>
              ))}
            </VStack>
          </SLayout>
        </LayoutContainer>
      </Section>

      <ReferenceTimetable />
      <ReferencePriceTable />
      <CtaSignup />
      <FaqList />
    </>
  )
}

Page.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Page
