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

import Faq from '../_common/Faq'
import Intro from '../_common/Intro'

const ReferenceTimetable = () => (
  <Section>
    <LayoutContainer>
      <SLayout tw="pt-16">
        <SHeadingGp tw="justify-items-center">
          <SectionTitle2 tw="text-center">Jumppoint速遞服務時間表</SectionTitle2>
        </SHeadingGp>
        <table
          tw="table-auto"
          css={{
            'th, td': tw`border border-brand-jmpt px-4 py-2`,
          }}
        >
          <thead tw="bg-brand-jmpt text-white">
            <tr>
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
          <thead tw="bg-brand-jmpt text-white">
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
          <div tw="text-xs pt-2 text-brand-jmpt text-opacity-50">
            <i>*收費以體積重量或實際重量計算，以較高者為準。</i>
            <br />
            <i>*體積重量 = 長度 x寬度 x 高度 (厘米) / 6000 = 體積重量 (公斤)</i>
          </div>
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
