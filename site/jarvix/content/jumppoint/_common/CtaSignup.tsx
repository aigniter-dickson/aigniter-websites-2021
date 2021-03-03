import { Link } from 'blitz'
import tw, { css, theme } from 'twin.macro'

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

export const CtaSignup = () => (
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
          <Link href="/jumppoint/signup">
            <a
              href="/jumppoint/signup"
              tw="justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt"
            >
              立即免費申請
            </a>
          </Link>
        </div>
      </SLayout>
    </LayoutContainer>
  </Section>
)

export default CtaSignup
