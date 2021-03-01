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
                <span>什麼業務適合使用Jumppoint？</span>
              </SectionTitle2>
              <p
                css={{
                  // [`@media (min-width: ${theme`screens.md`})`]: {
                  maxWidth: '30ch',
                  // },
                }}
              >
                為了使市⺠大眾能享用簡易便利、價格優惠的本地及國際物流服務，我們整合了世界各地物流公司的報價，為用戶提供更優惠和快捷的寄件服務。
              </p>
            </VStack>
          </VStack>
        </VStack>
      </SLayout>
    </LayoutContainer>
  </Section>
)

export default Intro
