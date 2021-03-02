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

import HeartOutline from 'assets/icons/eva-icons/HeartOutline'
import { useState } from 'react'
import { ArrowForward } from '@/assets/icons/eva-icons'
import Intro from '@/content/jumppoint/_common/Intro'
import Faq from '../_common/Faq'
import Phone from '@/app/components/core/mockups/Phone'

import useCaseServicesData from 'content/jumppoint/usecase-serivces/data'

const Hero = () => (
  <Section
    tw="overflow-hidden bg-brand-jmpt text-white h-full"
    css={{
      minHeight: '40rem',
      maxHeight: '70rem',
      [`@media (min-width: ${theme`screens.md`})`]: {
        minHeight: '50rem',
        maxHeight: '80rem',
      },
    }}
  >
    <LayoutContainer>
      <SLayout>
        <div
          tw="flex flex-col sm:flex-row"
          css={[
            tw`-m-8`,
            {
              '& > *': tw`p-8`,
            },
          ]}
          // css={css({
          //   [`@media (min-width: ${theme`screens.sm`})`]: {
          //     gridTemplateColumns: '1fr auto',
          //   },
          // })}
        >
          <VStack tw="gap-6 flex-shrink-0 flex-grow w-auto! my-auto sm:mr-36">
            <SHeadingGp tw="w-auto">
              <img
                src="/images/jumppoint/jumppoint_logo_white.webp"
                height="44px"
                width="219px"
                alt="jumppoint"
                tw="h-8 w-auto"
              />
              <SectionTitle tw="text-current!">
                <span>可靠</span>
                <br />
                <span>極速</span>
                <br />
                <span>全城最抵嘅物流配送App</span>
              </SectionTitle>
            </SHeadingGp>
            <div>
              <a tw="inline-flex items-center justify-center h-12 px-8 rounded-full text-white border border-white">
                <span>立即免費申請</span>
              </a>
            </div>
            {/* <div>
              <HStack tw="gap-4 justify-start">
                <a tw="relative block h-12 w-40">
                  <Image src="/images/google-play-badge.png" layout="fill" objectFit="contain" />
                </a>
                <a tw="relative block h-12 w-40">
                  <Image src="/images/google-play-badge.png" layout="fill" objectFit="contain" />
                </a>
              </HStack>
            </div> */}
          </VStack>
          {/* <figure as={Phone} /> */}
          <Phone tw="flex-shrink-0 h-40 sm:h-auto sm:mr-8">
            <Image
              src="/images/jumppoint/landing/jumppoint-screenshot-1@2x.jpg"
              layout="fill"
              objectFit="contain"
            />
          </Phone>
        </div>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const WhyCard = ({ icon, title, children }: any) => (
  <VStack
    tw="gap-6 w-full px-6 py-8 bg-white mt-6 shadow-lg rounded-lg"
    css={css({
      maxWidth: theme`width.64`,
      [`@media (min-width: ${theme`screens.md`})`]: {
        maxWidth: theme`width.60`,
      },
    })}
  >
    <div
      tw="flex items-center mx-auto justify-center h-12 w-12 rounded bg-brand-jmpt text-white"
      css={css({
        '& > *': tw`w-8 h-8`,
        '& svg path': { fill: 'currentcolor' },
      })}
    >
      {icon}
    </div>
    <VStack tw="gap-2">
      <h3 tw="text-2xl sm:text-xl text-gray-700 font-semibold">
        <span>{title}</span>
      </h3>
      <p tw="text-base  text-gray-500">
        <span>{children}</span>
      </p>
    </VStack>
  </VStack>
)

const Why = () => (
  <Section tw="bg-blueGray-50">
    <LayoutContainer>
      <SLayout>
        <SHeadingGp>
          <SectionTitle tw="text-center">為什麼選擇Jumppoint</SectionTitle>
        </SHeadingGp>
        <div tw="grid md:grid-cols-4 gap-6 justify-items-center">
          {[
            {
              icon: <HeartOutline />,
              title: '價錢實惠、節省運費',
              children:
                'jumppoint 為用戶提供優惠的寄件服務，運費價格比使用順豐官網、香港郵政以及其他物流公司等更便宜。',
            },
            {
              icon: <HeartOutline />,
              title: '全港唯一冷凍即日配送',
              children:
                '我們提供-18度、0-4度和室溫的選項，透過完善的保溫物流配套以即日或預約送貨的形式將冷凍貨品送到客人府上。',
            },
            {
              icon: <HeartOutline />,
              title: '方便使用、極速寄件',
              children:
                '用戶只需要在幾分鐘內完成簡單網上開戶手續，便可以使用我們網站或手機應用程式下單，助您隨時隨地、方便快捷地寄件。',
            },
            {
              icon: <HeartOutline />,
              title: '容易管理、簡易操作',
              children:
                '透過 jumppoint 的手機應用程式，用戶能隨時追蹤貨件的運送進度、運費支付紀錄，以及匯出 jumppoint 送遞及結餘紀錄，使用戶可以更容易管理寄件服務。',
            },
          ].map(({ icon, title, children }) => (
            <WhyCard key={title} {...{ icon, title, children }} />
          ))}
        </div>
        <div />
        <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費申請
        </a>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const CtaJoin = () => (
  <>
    {/* <Section tw="bg-blueGray-50">
    <LayoutContainer>
      <SLayout tw="justify-items-center">
        <a tw="inline-flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費申請
        </a>
      </SLayout>
    </LayoutContainer>
  </Section> */}
  </>
)

const NetworkMap = () => (
  <Section>
    <LayoutContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle tw="text-center">Jumppoint 服務，連接世界各地</SectionTitle>
          <p css={{ maxWidth: '40ch' }}>
            為了使市民大眾能享用簡易便利、價格優惠的本地及國際物流服務，jumppoint
            整合了世界各地的物流公司的報價
          </p>
        </SHeadingGp>
        <div tw="relative w-full aspect-w-3 aspect-h-2 justify-self-center">
          <Image src="/images/map2.svg" layout="fill" objectFit="contain" alt="" aria-hidden />
        </div>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const BriefCard = ({ backgroundSrc, title, content, href }: any) => (
  <Link href={href || '#'}>
    <a
      href={href || '#'}
      tw="block w-full bg-white mt-6 shadow-lg rounded overflow-hidden"
      css={css({
        maxWidth: theme`width.64`,
        [`@media (min-width: ${theme`screens.md`})`]: {
          maxWidth: theme`width.60`,
        },
      })}
    >
      <div tw="aspect-w-3 aspect-h-2">
        <Image src={backgroundSrc} layout="fill" objectFit="cover" alt="" aria-hidden />
      </div>
      <VStack tw="gap-4 px-6 py-8">
        <VStack tw="gap-4">
          <SectionTitle4 tw="text-center text-brand-jmpt">
            <span>{title}</span>
          </SectionTitle4>
          <p
            tw="text-base  text-gray-500"
            css={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              [`@media (min-width: ${theme`screens.md`})`]: {
                WebkitLineClamp: 5,
              },
            }}
          >
            <span>{content}</span>
          </p>
        </VStack>
      </VStack>
    </a>
  </Link>
)

const BriefUsecases = ({ pathname }: any) => (
  <Section tw="bg-blueGray-50">
    <LayoutContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle3 tw="text-onSurface text-opacity-75">正在經營自己的業務?</SectionTitle3>
          <SectionTitle>Jumppoint 幫到你</SectionTitle>
        </SHeadingGp>
        <div tw="grid mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(useCaseServicesData.pages['use-cases']?.sections)?.map(
            ([key, { title, contents }]) => (
              // <span>{JSON.stringify({ key, ...rest })}</span>
              <BriefCard
                key={key}
                backgroundSrc={contents[0].imageSrc + ''}
                title={title}
                content={contents.map(({ content }) => content).join(' ')}
                href={[pathname, 'use-cases', key].join('/')}
              />
            ),
          )}
        </div>
        <div />
        <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費申請
        </a>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const BriefServices = () => (
  <Section>
    <LayoutContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle>Jumppoint 提供什麼服務 ?</SectionTitle>
        </SHeadingGp>
        <div tw="grid mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <BriefCard
            backgroundSrc="/images/jumppoint/landing/brief-usecases-1.png"
            title="標準快遞服務"
            content="若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。"
          />
          <BriefCard
            backgroundSrc="/images/jumppoint/landing/brief-usecases-2.png"
            title="即日配送服務"
            content="不少人都擁有一間屬於自己嘅Online shop，除了幫網店設計美觀、尋找特色貨品外，為客人提供 高質量而且價錢便宜嘅送貨服務，能幫網店建立信譽同優勢。"
          />
          <BriefCard
            backgroundSrc="/images/jumppoint/landing/brief-usecases-3.png"
            title="全方位比較平台"
            content="運輸及物流業接通無數零售商和製造商的供應鏈，服務對象遍及各個國家、各行各業。jumppoint 使用科技打造物流系統，促進運作流程之間的互動合作，加強供應鏈的透明度、安全性和可持續 性，並能高效而安全地傳遞產品、服務及相關訊息，便利商業運作。"
          />
          <BriefCard
            backgroundSrc="/images/jumppoint/landing/brief-usecases-4.png"
            title="倉儲服務"
            content="jumppoint 致力提供優質跨境商家對顧客(B2C)電子商貿物流服務，包括進出口香港、空運服務以 及電商倉儲配送物流方案。以優惠的價錢提供更便捷的跨境電商物流"
          />
        </div>
        <div />
        <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費申請
        </a>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const Showcase = () => (
  <>
    {/* <Section>
    <LayoutContainer>
      <SLayout>
        <HStack>
          <VStack>
            <SHeadingGp>
              <p>jumppoint</p>
              <h1>hi</h1>
            </SHeadingGp>
          </VStack>
        </HStack>
      </SLayout>
    </LayoutContainer>
    </Section> */}
  </>
)

const CtaSignup = () => (
  <Section tw="bg-brand-jmpt bg-opacity-10">
    <LayoutContainer>
      <SLayout
        tw="py-24"
        css={css({
          [`@media (min-width: ${theme`screens.md`})`]: {
            gridTemplateColumns: '1fr auto',
          },
        })}
      >
        <SHeadingGp tw="text-center md:text-left">
          <SectionTitle>立即註冊Jumppoint</SectionTitle>
          <SectionTitle3 tw="text-onSurface text-opacity-75">
            <span>免申請費、免年費、免按金、3分鐘開戶，即時預約寄件</span>
          </SectionTitle3>
        </SHeadingGp>
        <div tw="flex justify-center items-center">
          <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
            立即免費申請
          </a>
        </div>
      </SLayout>
    </LayoutContainer>
  </Section>
)

const GotoDetailsCard = () => (
  <a href="#" tw="block w-60 shadow-lg rounded-lg ">
    <div tw="aspect-w-3 aspect-h-2">
      <Image src="/assets/images/bg_1.png" layout="fill" objectFit="cover" alt="" aria-hidden />
    </div>
    <div tw="bg-white  w-full p-4">
      <p tw="text-indigo-500 text-base font-medium"></p>
      <p tw="text-gray-800  text-xl font-medium mb-2">New Mac is here !</p>
      <p tw="text-gray-400  font-light text-base">
        The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years
        on...
      </p>
    </div>
  </a>
)

const Home: import('blitz').BlitzPage = () => {
  const { pathname } = useRouter()

  return (
    <>
      <Hero />
      {/* <AnotherHero /> */}
      <Intro />
      <Why />
      <CtaJoin />
      <NetworkMap />
      <BriefUsecases pathname={pathname} />
      <BriefServices />
      <Showcase />
      <CtaSignup />
      <Faq />
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

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
