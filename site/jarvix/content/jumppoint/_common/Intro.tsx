import tw from 'twin.macro'

import { Image } from 'blitz'

import { VStack } from 'app/components/core/Stack'
import LayoutContainer from 'app/layouts/components/LayoutContainer'
import {
  Section,
  SLayout,
  SHeadingGp,
  SectionTitle,
  SectionTitle2,
  SectionTitle3,
  SectionTitle4,
} from 'app/layouts/components/Section'

const WithTick = ({ children }: any) => (
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
    <span tw="ml-2">{children}</span>
  </span>
)

const Intro = () => (
  <Section>
    <LayoutContainer>
      <SLayout>
        <VStack tw="grid-cols-1 md:grid-cols-2">
          <div
            tw="relative w-full aspect-w-3 aspect-h-1 justify-self-center"
            css={{ maxWidth: '35rem' }}
          >
            <Image src="/images/map1.png" layout="fill" objectFit="contain" alt="" aria-hidden />
          </div>
          <VStack tw="gap-6 text-center md:text-left md:order-first">
            <VStack tw="gap-2 place-items-center md:place-items-start">
              <SHeadingGp>
                <SectionTitle>智能物流網絡</SectionTitle>
              </SHeadingGp>
              <p
                css={{
                  // [`@media (min-width: ${theme`screens.md`})`]: {
                  maxWidth: '30ch',
                  // },
                }}
              >
                jumppoint是一間紮根於香港的物流科技公司，以先進科技作為主導
                ，致力為香港及亞洲各地超過 3000個商戶提供最高效可靠嘅門對門物流服務。
              </p>
            </VStack>

            <VStack tw="gap-2 place-items-center md:place-items-start">
              <SectionTitle2>
                <span>Jumppoint 如何幫助不同類型的商户？</span>
              </SectionTitle2>
              {[
                'B2C電商物流 (潮流服飾、化妝護膚品、電子產品、日用品等)',
                'B2C即日物流 (生鮮電商、酒類飲品、醫療、急件等)',
                'B2B分銷商 (需要配送貨品到大量中小型零售商或餐飲客戶)',
              ].map((children) => (
                <WithTick {...{ children }} />
              ))}
            </VStack>
          </VStack>
        </VStack>
      </SLayout>
    </LayoutContainer>
  </Section>
)

export default Intro
