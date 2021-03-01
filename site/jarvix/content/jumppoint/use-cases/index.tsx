import { Image } from 'blitz'

import { HStack, VStack } from 'app/components/core/Stack'
import LayoutContainer from 'app/layouts/components/LayoutContainer'
import Layout from 'app/layouts/Layout'
import tw, { css, theme } from 'twin.macro'

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

import { useState } from 'react'
import { ArrowForward } from '@/assets/icons/eva-icons'
import Faq from '../_common/Faq'
import Intro from '../_common/Intro'

// const Intro = () => (
//   <Section>
//     <LayoutContainer>
//       <SLayout>
//         <VStack tw="grid-cols-1 md:grid-cols-2">
//           <div
//             tw="relative w-full aspect-w-3 aspect-h-1 justify-self-center"
//             css={{ maxWidth: '35rem' }}
//           >
//             <Image src="/images/map1.png" layout="fill" objectFit="contain" alt="" aria-hidden />
//           </div>
//           <VStack tw="gap-6 text-center md:text-left md:order-first">
//             <VStack tw="gap-2 place-items-center md:place-items-start">
//               <SHeadingGp>
//                 <SectionTitle>智能物流網絡</SectionTitle>
//               </SHeadingGp>
//               <p
//                 css={{
//                   // [`@media (min-width: ${theme`screens.md`})`]: {
//                   maxWidth: '30ch',
//                   // },
//                 }}
//               >
//                 jumppoint是一間紮根於香港的物流科技公司，以先進科技作為主導
//                 ，致力為香港及亞洲各地超過 3000個商戶提供最高效可靠嘅門對門物流服務。
//               </p>
//             </VStack>

//             <VStack tw="gap-2 place-items-center md:place-items-start">
//               <SectionTitle2>
//                 <span>什麼業務適合使用Jumppoint？</span>
//               </SectionTitle2>
//               <p
//                 css={{
//                   // [`@media (min-width: ${theme`screens.md`})`]: {
//                   maxWidth: '30ch',
//                   // },
//                 }}
//               >
//                 為了使市⺠大眾能享用簡易便利、價格優惠的本地及國際物流服務，我們整合了世界各地物流公司的報價，為用戶提供更優惠和快捷的寄件服務。
//               </p>
//             </VStack>
//           </VStack>
//         </VStack>
//       </SLayout>
//     </LayoutContainer>
//   </Section>
// )

const Food = () => (
  <Section>
    <LayoutContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle tw="text-brand-jmpt text-opacity-75">凍肉、蔬果等食品</SectionTitle>
          <p css={{ maxWidth: '40ch' }}>
            若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送貨、數日後客人才能收到食物的束縛
          </p>
        </SHeadingGp>
        <VStack tw="gap-4">
          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">根據貨品類型包裝、安全送貨</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">-19ºC冰箱儲存，保持新鮮</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">根據貨品類型包裝、安全送貨</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">-19ºC冰箱儲存，保持新鮮</span>
          </span>
        </VStack>
        <div />
        <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費註冊
        </a>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const Beauty = () => (
  <Section>
    <LayoutContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle tw="text-brand-jmpt text-opacity-75">凍肉、蔬果等食品</SectionTitle>
          <p css={{ maxWidth: '40ch' }}>
            若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送貨、數日後客人才能收到食物的束縛
          </p>
        </SHeadingGp>
        <VStack tw="gap-4">
          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">根據貨品類型包裝、安全送貨</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">-19ºC冰箱儲存，保持新鮮</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">根據貨品類型包裝、安全送貨</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">-19ºC冰箱儲存，保持新鮮</span>
          </span>
        </VStack>
        <div />
        <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費註冊
        </a>
      </SLayout>
    </LayoutContainer>
  </Section>
)
const Retail = () => (
  <Section>
    <LayoutContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle tw="text-brand-jmpt text-opacity-75">凍肉、蔬果等食品</SectionTitle>
          <p css={{ maxWidth: '40ch' }}>
            若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送貨、數日後客人才能收到食物的束縛
          </p>
        </SHeadingGp>
        <VStack tw="gap-4">
          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">根據貨品類型包裝、安全送貨</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">-19ºC冰箱儲存，保持新鮮</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">根據貨品類型包裝、安全送貨</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">-19ºC冰箱儲存，保持新鮮</span>
          </span>
        </VStack>
        <div />
        <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費註冊
        </a>
      </SLayout>
    </LayoutContainer>
  </Section>
)
const CrossBorder = () => (
  <Section>
    <LayoutContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle tw="text-brand-jmpt text-opacity-75">凍肉、蔬果等食品</SectionTitle>
          <p css={{ maxWidth: '40ch' }}>
            若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送貨、數日後客人才能收到食物的束縛
          </p>
        </SHeadingGp>
        <VStack tw="gap-4">
          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">根據貨品類型包裝、安全送貨</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">-19ºC冰箱儲存，保持新鮮</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">根據貨品類型包裝、安全送貨</span>
          </span>

          <span tw="flex">
            <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
              <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span tw="ml-2">-19ºC冰箱儲存，保持新鮮</span>
          </span>
        </VStack>
        <div />
        <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費註冊
        </a>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const ReferenceTimetable = () => (
  <Section>
    <LayoutContainer>
      <SLayout tw="py-8">
        <SHeadingGp tw="justify-items-center">
          <SectionTitle2 tw="text-center">Jumppoint速遞服務時間表</SectionTitle2>
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
              <th>Author</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intro to CSS</td>
              <td>Adam</td>
              <td>858</td>
            </tr>
            <tr>
              <td>
                A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on
                Design
              </td>
              <td>Adam</td>
              <td>112</td>
            </tr>
            <tr>
              <td>Intro to JavaScript</td>
              <td>Chris</td>
              <td>1,280</td>
            </tr>
          </tbody>
        </table>
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
            <tr>
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
        <div tw="flex justify-center items-center">
          <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
            立即免費申請
          </a>
        </div>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const Page: import('blitz').BlitzPage = () => {
  return (
    <>
      {/* <Hero /> */}
      <Intro />
      <Food />
      <Beauty />
      <Retail />
      <CrossBorder />
      <ReferenceTimetable />
      <CtaSignup />
      <Faq />
      {/* <CtaJoin />
      <NetworkMap />
      <BriefServices />
      <BriefUsecases />
      <Showcase />
      <CtaSignup />
      <Faq /> */}
      {/* <B />
      <C />
      <GotoDetailsCard />
      <D />
      <E />
      <Section tw="h-screen w-screen" />
      <section id="hero-landing" tw="bg-brand-jmpt" />
      <section id="intro" />
      <section id="why" />
      <section id="cta-join" />
      <section id="network-map" />
      <section id="brief-use-case" />
      <section id="brief-services" />
      <section id="showcase" />
      <section id="cta-signup-2" />
      <section id="q-and-a" />
      <section id="contact" /> */}
    </>
  )
}

Page.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Page