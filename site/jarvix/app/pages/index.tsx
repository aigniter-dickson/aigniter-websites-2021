import { HStack, VStack } from 'app/components/core/Stack'
import LayoutContainer from 'app/layouts/components/LayoutContainer'
import Layout from 'app/layouts/Layout'
import tw, { css, theme } from 'twin.macro'
import * as S from '@/content/jumppoint/landing/'
import { Image } from 'blitz'

import { Section, SContainer, SLayout, SHeadingGp } from 'app/layouts/components/Section'

import HeartOutline from 'assets/icons/eva-icons/HeartOutline'
import { useState } from 'react'
import { ArrowForward } from '@/assets/icons/eva-icons'

const SectionTitle = tw.h1`text-3xl md:text-4xl font-semibold leading-tight! tracking-tight text-brand-jmpt`

const SectionTitle2 = tw.h2`text-xl md:text-2xl font-semibold leading-tight! tracking-tight `

const SectionTitle3 = tw.h3`text-lg md:text-xl font-medium leading-tight! tracking-tight text-opacity-50`

const SectionTitle4 = tw.h4`text-base md:text-lg font-medium leading-none! tracking-tight text-opacity-50`

const Hero = () => (
  <Section tw="bg-brand-jmpt text-white">
    <SContainer>
      <SLayout>
        <div tw="grid grid-flow-row md:grid-flow-col">
          <VStack tw="gap-6">
            <SHeadingGp>
              <p>jumppoint</p>
              <SectionTitle tw="text-current!">
                <span>可靠 極速</span>
                <br />
                <span>全城最抵嘅物流格價App</span>
              </SectionTitle>
            </SHeadingGp>
            <div>
              <a tw="inline-flex items-center justify-center h-12 px-8 rounded-full text-white border border-white">
                立即免費申請
              </a>
            </div>
            <div>
              <HStack tw="gap-4 justify-start">
                <a tw="relative block h-12 w-40">
                  <Image src="/images/google-play-badge.png" layout="fill" objectFit="contain" />
                </a>
                <a tw="relative block h-12 w-40">
                  <Image src="/images/google-play-badge.png" layout="fill" objectFit="contain" />
                </a>
              </HStack>
            </div>
          </VStack>
        </div>
      </SLayout>
    </SContainer>
  </Section>
)

const Intro = () => (
  <Section>
    <SContainer>
      <SLayout>
        <VStack tw="grid-cols-1 md:grid-cols-2">
          <div
            tw="relative w-full aspect-w-3 aspect-h-1 justify-self-center"
            css={{ maxWidth: '35rem' }}
          >
            <Image src="/images/map1.png" layout="fill" objectFit="contain" alt="" aria-hidden />
          </div>
          <VStack tw="gap-6 text-center md:text-left md:order-first">
            <VStack tw="gap-2">
              <SHeadingGp>
                <SectionTitle>智能物流網絡</SectionTitle>
              </SHeadingGp>
              <p tw="pr-24" css={{ maxWidth: '30ch' }}>
                jumppoint是一間紮根於香港的物流科技公司，以先進科技作為主導
                ，致力為香港及亞洲各地超過 3000個商戶提供最高效可靠嘅門對門物流服務。
              </p>
            </VStack>

            <VStack tw="gap-2">
              <SectionTitle2>
                <span>什麼業務適合使用Jumppoint？</span>
              </SectionTitle2>
              <p css={{ maxWidth: '30ch' }}>
                為了使市⺠大眾能享用簡易便利、價格優惠的本地及國際物流服務，我們整合了世界各地物流公司的報價，為用戶提供更優惠和快捷的寄件服務。
              </p>
            </VStack>
          </VStack>
        </VStack>
      </SLayout>
    </SContainer>
  </Section>
)

const WhyCard = ({ iconn, title, children }: any) => (
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
      {iconn}
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
    <SContainer>
      <SLayout>
        <SHeadingGp>
          <SectionTitle tw="text-center">為什麼選擇Jumppoint</SectionTitle>
        </SHeadingGp>
        <div tw="grid md:grid-cols-3 gap-6 justify-items-center">
          <WhyCard iconn={<HeartOutline />} title="價錢實惠、節省運費">
            jumppoint 為用戶提供優惠的寄件服務，運費價格比使用順豐官網、香港郵政以及其他物流公司等
            更便宜。
          </WhyCard>
          <WhyCard iconn={<HeartOutline />} title="價錢實惠、節省運費">
            jumppoint 為用戶提供優惠的寄件服務，運費價格比使用順豐官網、香港郵政以及其他物流公司等
            更便宜。
          </WhyCard>
          <WhyCard iconn={<HeartOutline />} title="價錢實惠、節省運費">
            jumppoint 為用戶提供優惠的寄件服務，運費價格比使用順豐官網、香港郵政以及其他物流公司等
            更便宜。
          </WhyCard>
        </div>
        <div />
        <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費申請
        </a>
      </SLayout>
    </SContainer>
  </Section>
)

const CtaJoin = () => (
  <>
    {/* <Section tw="bg-blueGray-50">
    <SContainer>
      <SLayout tw="justify-items-center">
        <a tw="inline-flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費申請
        </a>
      </SLayout>
    </SContainer>
  </Section> */}
  </>
)

const NetworkMap = () => (
  <Section>
    <SContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle tw="text-center">Jumppoint 服務，連接世界各地</SectionTitle>
          <p css={{ maxWidth: '40ch' }}>
            為了使市民大眾能享用簡易便利、價格優惠的本地及國際物流服務，jumppoint
            整合了世界各地的物流公司的報價
          </p>
        </SHeadingGp>
        <div tw="relative w-full aspect-w-4 aspect-h-3 justify-self-center">
          <Image src="/images/map2.svg" layout="fill" objectFit="contain" alt="" aria-hidden />
        </div>
      </SLayout>
    </SContainer>
  </Section>
)

const BriefCard = ({ backgroundSrc, title, content }: any) => (
  <a
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
)

const BriefServices = () => (
  <Section>
    <SContainer>
      <SLayout>
        <SHeadingGp tw="justify-items-center">
          <SectionTitle3 tw="text-onSurface text-opacity-75">正在經營自己的業務?</SectionTitle3>
          <SectionTitle>Jumppoint 幫到你</SectionTitle>
        </SHeadingGp>
        <div tw="grid mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <BriefCard
            backgroundSrc="/images/jumppoint/landing/brief-services-1.png"
            title="凍肉、蔬果等食品"
            content="若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。"
          />
          <BriefCard
            backgroundSrc="/images/jumppoint/landing/brief-services-2.png"
            title="化妝品、日用品"
            content="不少人都擁有一間屬於自己嘅Online shop，除了幫網店設計美觀、尋找特色貨品外，為客人提供 高質量而且價錢便宜嘅送貨服務，能幫網店建立信譽同優勢。"
          />
          <BriefCard
            backgroundSrc="/images/jumppoint/landing/brief-services-3.png"
            title="零售服務"
            content="運輸及物流業接通無數零售商和製造商的供應鏈，服務對象遍及各個國家、各行各業。jumppoint 使用科技打造物流系統，促進運作流程之間的互動合作，加強供應鏈的透明度、安全性和可持續 性，並能高效而安全地傳遞產品、服務及相關訊息，便利商業運作。"
          />
          <BriefCard
            backgroundSrc="/images/jumppoint/landing/brief-services-4.png"
            title="跨境電商貨運配送"
            content="jumppoint 致力提供優質跨境商家對顧客(B2C)電子商貿物流服務，包括進出口香港、空運服務以 及電商倉儲配送物流方案。以優惠的價錢提供更便捷的跨境電商物流"
          />
        </div>
        <div />
        <a tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt">
          立即免費申請
        </a>
      </SLayout>
    </SContainer>
  </Section>
)

const BriefUsecases = () => (
  <Section>
    <SContainer>
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
    </SContainer>
  </Section>
)

const Showcase = () => (
  <>
    {/* <Section>
    <SContainer>
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
    </SContainer>
    </Section> */}
  </>
)

const CtaSignup = () => (
  <Section tw="bg-brand-jmpt bg-opacity-10">
    <SContainer>
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
    </SContainer>
  </Section>
)
const FaqItem = ({ title, children }: any) => {
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

export const Faq = () => {
  return (
    <Section>
      <SContainer>
        <SLayout
          tw="py-24"
          css={css({
            [`@media (min-width: ${theme`screens.md`})`]: {
              gridTemplateColumns: '1fr auto',
            },
          })}
        >
          <SHeadingGp tw="text-left md:text-left">
            <SectionTitle>常見問題 </SectionTitle>
          </SHeadingGp>
          <div tw="divide-y">
            <FaqItem title="問題 1 ?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              rem aperiam, eaque ipsa quae.
            </FaqItem>
            <FaqItem title="問題 2 ?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              rem aperiam, eaque ipsa quae.
            </FaqItem>
            <FaqItem title="問題 3 ?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              rem aperiam, eaque ipsa quae.
            </FaqItem>
            <FaqItem title="問題 4 ?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              rem aperiam, eaque ipsa quae.
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
        </SLayout>
      </SContainer>
    </Section>
  )
}

export const AnotherHero = () => (
  <div tw="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
    <div tw="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
      <div tw="max-w-xl mb-6">
        <div>
          <p tw="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Brand new
          </p>
        </div>
        <h2 tw="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          The quick, brown fox
          <br tw="hidden md:block" />
          jumps over <span tw="inline-block text-purple-400">a lazy dog</span>
        </h2>
        <p tw="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
        </p>
      </div>
      <div tw="flex items-center">
        <a
          href="/"
          tw="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700"
        >
          Get started
        </a>
        <a
          href="/"
          aria-label=""
          tw="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
        >
          Learn more
        </a>
      </div>
    </div>
    <div>
      <img
        src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
        tw="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
        alt=""
      />
    </div>
  </div>
)

const B = () => (
  <div tw="max-w-screen-xl p-4 bg-white  mx-auto px-4 sm:px-6 lg:px-8 relative py-28 lg:mt-20">
    <div tw="relative">
      <div tw="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div tw="lg:col-start-2 lg:max-w-2xl ml-auto">
          <p tw="text-base leading-6 text-indigo-500 font-semibold uppercase">Interactive</p>
          <h4 tw="mt-2 text-2xl leading-8 font-extrabold text-gray-900  sm:text-3xl sm:leading-9">
            Interactivity between team members is the key of the success.
          </h4>
          <p tw="mt-4 text-lg leading-6 text-gray-500 ">
            Build a simply and powered collaborative space for all your team. Track, share, measure,
            you have a fully control, it&#x27;s never be simply and efficient.
          </p>
          <ul tw="mt-8 md:grid md:grid-cols-2 gap-6">
            <li tw="mt-6 lg:mt-0">
              <div tw="flex">
                <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
                  <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span tw="ml-4 text-base leading-6 font-medium text-gray-500 ">
                  Live modifications
                </span>
              </div>
            </li>
            <li tw="mt-6 lg:mt-0">
              <div tw="flex">
                <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
                  <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span tw="ml-4 text-base leading-6 font-medium text-gray-500 ">Data tracker</span>
              </div>
            </li>
            <li tw="mt-6 lg:mt-0">
              <div tw="flex">
                <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
                  <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span tw="ml-4 text-base leading-6 font-medium text-gray-500 ">24/24 support</span>
              </div>
            </li>
            <li tw="mt-6 lg:mt-0">
              <div tw="flex">
                <span tw="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
                  <svg tw="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span tw="ml-4 text-base leading-6 font-medium text-gray-500 ">
                  Free tips to improve work time
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div tw="mt-10 lg:-mx-4 relative lg:mt-0 lg:col-start-1">
          <div tw="relative space-y-4">
            <div tw="flex items-end justify-center lg:justify-start space-x-4">
              <img
                tw="rounded-lg shadow-lg w-32 md:w-56"
                width="200"
                src="/images/object/8.jpg"
                alt="1"
              />
              <img
                tw="rounded-lg shadow-lg w-40 md:w-64"
                width="260"
                src="/images/landscape/4.jpg"
                alt="2"
              />
            </div>
            <div tw="flex items-start justify-center lg:justify-start space-x-4 ml-12">
              <img
                tw="rounded-lg shadow-lg w-24 md:w-40"
                width="170"
                src="/images/landscape/3.jpg"
                alt="3"
              />
              <img
                tw="rounded-lg shadow-lg w-32 md:w-56"
                width="200"
                src="/images/object/9.jpg"
                alt="4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const C = () => (
  <div data-section>
    <div data-layout-container>
      <hgroup>
        <h4 tw="mt-2 text-2xl leading-8 font-extrabold text-gray-900  sm:text-3xl sm:leading-9">
          Interactivity between team members is the key of the success.
        </h4>
      </hgroup>
      <div tw="sm:flex flex-wrap justify-center items-center text-center gap-8">
        <div tw="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg ">
          <div tw="flex-shrink-0">
            <div tw="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                tw="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 tw="text-2xl sm:text-xl text-gray-700 font-semibold  py-4">Website Design</h3>
          <p tw="text-base  text-gray-500  py-4">
            Encompassing today’s website design technology to integrated and build solutions
            relevant to your business.
          </p>
        </div>
        <div tw="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg ">
          <div tw="flex-shrink-0">
            <div tw="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                tw="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 tw="text-2xl sm:text-xl text-gray-700 font-semibold  py-4">Branding</h3>
          <p tw="text-base text-gray-500  py-4">
            Share relevant, engaging, and inspirational brand messages to create a connection with
            your audience.
          </p>
        </div>
        <div tw="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg ">
          <div tw="flex-shrink-0">
            <div tw="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                tw="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 tw="text-2xl sm:text-xl text-gray-700 font-semibold  py-4">SEO Marketing</h3>
          <p tw="text-base  text-gray-500  py-4">
            Let us help you level up your search engine game, explore our solutions for digital
            marketing for your business.
          </p>
        </div>
      </div>
      <div data-row data-center>
        <a
          href="/"
          tw="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700"
        >
          Get started
        </a>
      </div>
    </div>
  </div>
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

const D = () => <GotoDetailsCard />

const E = () => (
  <div tw="bg-white  ">
    <div tw="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h2 tw="text-3xl font-extrabold text-black  sm:text-4xl">
        <span tw="block">Want to be millionaire ?</span>
        <span tw="block text-indigo-500">It&#x27;s today or never.</span>
      </h2>
      <div tw="lg:mt-0 lg:flex-shrink-0">
        <div tw=" inline-flex rounded-md shadow">
          <button
            type="button"
            tw="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Get started
          </button>
        </div>
        <div tw="ml-3 inline-flex rounded-md shadow">
          <button
            type="button"
            tw="py-4 px-6  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Invite friend
          </button>
        </div>
      </div>
    </div>
  </div>
)

const Home: import('blitz').BlitzPage = () => {
  return (
    <>
      <Hero />
      {/* <AnotherHero /> */}
      <Intro />
      <Why />
      <CtaJoin />
      <NetworkMap />
      <BriefServices />
      <BriefUsecases />
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
