import React from 'react'

import {
  Box,
  Center,
  Container,
  SimpleGrid,
  Text,
  chakra,
  Heading,
} from '@chakra-ui/react'
import Image from 'next/image'
import { tw } from 'twind'
import { css, theme } from 'twind/css'

import { JarvixInline } from '@/assets/images'
import { JarvixpayLogotypeInline } from '@/assets/images/logo'
import { Meta } from '@/layout/Meta'
import { Main } from '@/templates/Main'

const _section = tw`relative flex justify-center w-screen`
const _sectionBody = tw`relative grid w-full max-w-screen-lg gap-8 px-8 py-24 place-items-center`
const _input = tw(
  `rounded-lg shadow-sm`,
  `py-2 px-4`,
  `text-base`, // typography
  `border(& blueGray-200)`,
  `focus:(
    outline-none
    border-transparent
    ring(2 brand-default-primary)
  )`, // focus style
  `text-blueGray-700 placeholder-blueGray-300 bg-white`, // colors
  `appearance-none`, // reset style
)

export type SectionProps = {
  children: React.ReactNode
  className?: string
  sectionBackground?: React.ReactNode
}

export const Section = chakra(
  ({ children: SectionBody, className, sectionBackground }: SectionProps) => (
    <Box as="section" position="relative" w="full" {...{ className }}>
      {
        // background mask
      }
      {sectionBackground && (
        <Box position="absolute" w="full" h="full" pointerEvents="none">
          <Box position="relative" w="full" h="full">
            {sectionBackground}
          </Box>
        </Box>
      )}
      {
        // center container with max width
      }
      <Center position="relative">
        <Container position="relative" size="lg">
          <SimpleGrid spacing={[8]} py={[24]} px={[4]}>
            {SectionBody}
          </SimpleGrid>
        </Container>
      </Center>
    </Box>
  ),
)

export type TitleGroupProps = {
  children: React.ReactNode
  className?: string
}

export const TitleGroup = chakra(({ children, className }: TitleGroupProps) => (
  <SimpleGrid as="hgroup" spacing={[4]} {...{ className }}>
    {children}
  </SimpleGrid>
))

const Index = () => (
  <Main
    meta={
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starer code for your project. Build your React application with Next.js framework."
      />
    }
  >
    <Section
      sectionBackground={
        <>
          <Image
            src="/assets/images/bg_1.png"
            layout="fill"
            objectFit="cover"
            alt=""
            aria-hidden
          />
          <Box
            pos="absolute"
            w="full"
            h="full"
            bg="blueGray.700"
            opacity="0.9"
          />
        </>
      }
      color="white"
    >
      <TitleGroup>
        <JarvixInline
          className={tw`w-auto h-12`}
          style={{ filter: 'invert(1)' }}
          aria-hidden
        />
        <Heading as="h1" size="heading">
          <span>做生意，從此變得更輕鬆</span>
        </Heading>
        <h4 className={tw`text-2xl`}>零售及服務門店首選科技平台</h4>
      </TitleGroup>
      <Text fontSize="md">
        Jarvix提供雲端管理及營銷軟件平台、一站式信用咭及電子支付收款APP及互聯網金融服務，協助每位老闆用好數據管理生意、吸引客戶、更快獲取現金流及資本拓展業務。
      </Text>
    </Section>

    <Section
      sectionBackground={
        <>
          <Image
            src="/assets/images/bg_1.png"
            className={tw`object-cover`}
            layout="fill"
            alt=""
            aria-hidden
          />
          <Box pos="absolute" w="full" h="full" bg="white" opacity="0.95" />
        </>
      }
    >
      <TitleGroup>
        <h2 className={tw`text-3xl font-semibold leading-tight text-center`}>
          集團簡介 - “讓做生意變得更輕鬆”
        </h2>
      </TitleGroup>

      <Text fontSize="md">
        盈利達控股是一間植根香港的國際化數據及金融科技公司，為包括中國內地、香港、馬來西亞及泰國等多個亞洲國家及地區的企業、金融機構及政府機關提供以數據科技驅動的產品及服務，讓做生意變得更輕鬆。
        <br />
        <br />
        集團於2016年在香港數碼港的支持下推出包括Jarvix.ai、Jarvix
        Pay及CERTOM等多項互聯網、數據科技及金融科技產品，廣獲中小企業支持，後獲多個知名科技投資基金支持，以數據科技為超過100億的交易提供智慧營銷、電子支付、互聯網金融等科技服務，持續以創新科技推動「讓做生意變得更輕鬆」的願景。
      </Text>

      <hr className={tw`border(t-8 blueGray-700) w-2/3 mx-auto`} />
    </Section>

    <Section
      sectionBackground={
        <Box w="full" h="full" bg="coolGray.500" opacity="0.1" />
      }
      className={tw(`bg-brand-default-primary bg-opacity-10`)}
    >
      <div
        className={tw`${_sectionBody} override:(grid(md:(cols-3)) gap(12 md:(8)))`}
      >
        {[...Array(3)].map((_, i) => (
          <div className={tw`grid gap-2`} key={+i}>
            <hr className={tw`w-20 h-3 border-none bg-blueGray-400`} />
            <h2
              className={tw`text-5xl font-extrabold text-brand-default-primary`}
            >
              1234 +
            </h2>
            <p className={tw`text-lg`}>總營業額</p>
          </div>
        ))}
      </div>
    </Section>

    <Section className={tw(`bg-blueGray-50`)}>
      <div
        className={tw`${_sectionBody} override:(grid(md:(cols-3)) gap(12 md:(8)))`}
      >
        {[...Array(3)].map((_, i) => (
          <div className={tw`grid gap-4 md:place-items-center`} key={+i}>
            <div className={tw`rounded-full bg-blueGray-100 h-20 w-20)`} />
            <h4 className={tw`text-2xl font-medium text-blueGray-800`}>
              輕鬆方便
            </h4>
            <p
              className={tw`text-base ${css({
                maxWidth: theme('spacing.48'),
              })}`}
            >
              Jarvis提供雲端管理及營銷軟件平台、一站式信用咭及電子支付收款APP
            </p>
          </div>
        ))}
      </div>
    </Section>

    <section className={tw(_section)}>
      <div className={tw`${_sectionBody} override:(gap-20)`}>
        <h2
          className={tw`text-3xl font-semibold leading-tight text-center text-brand-default-primaryDarker`}
        >
          Jarvix智能商業及支付平台
        </h2>
        <div
          className={tw`grid(& cols(xs:2 md:4)) gap(12 md:(8)) place-items-center`}
        >
          {[...Array(4)].map((_, i) => (
            <div
              className={tw`relative grid w-auto shadow ${css({
                maxWidth: theme('spacing.48'),
              })}`}
              key={+i}
            >
              <div className={tw`relative bg-violet-100 w-full aspect(3/2)`}>
                <Image
                  src="/assets/images/64d8bb25-ea2b-44b4-b5ed-3838840e6b10ng.png"
                  className={tw`object-cover`}
                  layout="fill"
                  alt=""
                  aria-hidden
                />
              </div>
              <div
                className={tw`px-4 py-6 grid gap-2 place-items-center border(b-4 violet-600)`}
              >
                <h4
                  className={tw`text-xl font-medium leading-none text-violet-600`}
                >
                  <JarvixpayLogotypeInline
                    className={tw`object-cover w-auto ${css({
                      height: '1.375em',
                    })}`}
                    aria-hidden
                  />
                  {/* Jarvix Pay */}
                </h4>
                <p className={tw`text-base`}>一站式智能及收款平台</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className={tw`px-16 py-4 font-semibold text-white rounded-full bg-brand-default-primaryDarker`}
          type="button"
        >
          立即加入我們
        </button>
      </div>
    </section>

    <section
      className={tw(
        _section, //
        `bg-brand-default-primary bg-opacity-10`,
      )}
    >
      <div className={tw`${_sectionBody} override:(gap-20)`}>
        <h2
          className={tw`text-3xl font-semibold leading-tight text-center text-brand-default-primaryDarker`}
        >
          合作商戶
        </h2>
        <div className={tw`grid(& cols(xs:2 md:4)) gap(16) w-full`}>
          {[
            'logo-cyberport',
            'logo-hkstp',
            'logo-hkx',
            'logo-hbcc',
            'logo-hksar',
            'logo-b4b',
          ]
            .map((f) => `/assets/images/acknowledgements/${f}.png`)
            .map((src) => (
              // <img
              <Image
                src={src}
                key={src}
                layout="responsive"
                objectFit="contain"
                width={12 * 16}
                height={4 * 16}
                alt=""
                aria-hidden
              />
            ))}
        </div>
      </div>
    </section>

    <section className={tw(_section)}>
      <div className={tw`${_sectionBody} override:(gap-20)`}>
        <h2
          className={tw`text-3xl font-semibold leading-tight text-center text-brand-default-primaryDarker`}
        >
          聯絡我們
        </h2>
        <div
          className={tw`
            grid(
              &
              cols(xs:2)
            )
            gap(12 md:8)
            w-full place-items-stretch
          `}
        >
          <div>
            <ul className={tw`grid gap-3 p-2 text-base`}>
              <li>
                <i className={tw`bg-current`} />
                九龍新蒲崗大有街1號勤達中心501室
              </li>
              <li>info@jarvix.com</li>
              <li>+852 90805740</li>
            </ul>
          </div>
          <form id="contact-form" className={tw`grid gap-4`}>
            <input
              type="text"
              id="contact-form-name"
              name="name"
              className={tw(_input)}
              placeholder="姓名"
            />
            <input
              type="text"
              id="contact-form-email"
              name="email"
              className={tw(_input)}
              placeholder="輸入電郵地址"
            />
            <textarea
              id="contact-form-message"
              name="message"
              className={tw(_input, `w-full resize-none`)}
              placeholder="輸入你的信息"
              rows={4}
            />
            <button
              type="submit"
              className={tw(
                `rounded-full`,
                `py-2 px-12`,
                `font-semibold`,
                `bg-brand-default-primaryDarker text-white shadow-lg`,
                `place-self-end mt-2`,
              )}
            >
              提交
            </button>
          </form>
        </div>
      </div>
    </section>

    <section
      className={tw(_section, `bg-brand-default-primaryDarker text-white`)}
    >
      <div className={tw(_sectionBody)}>footer</div>
    </section>
  </Main>
)

export default Index
