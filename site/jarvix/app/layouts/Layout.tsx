import tw, { css, theme } from 'twin.macro'
import { Head, Link } from 'blitz'

import LayoutContainer from './components/LayoutContainer'
import Navbar from './components/Navbar'
import { Section, SLayout } from './components/Section'
import { HStack, VStack } from '../components/core/Stack'
import SvgAppStore from '@/assets/AppStore'
import SvgGooglePlay from '@/assets/GooglePlay'

type LayoutProps = Required<
  import('react').PropsWithChildren<{
    title?: string
  }>
>

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || ''}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main tw="relative w-screen">{children}</main>
      <Section as="footer" tw="relative w-screen bg-blueGray-700 text-white">
        <SLayout>
          <div
            tw="grid"
            css={{
              [`@media (min-width: ${theme`screens.md`})`]: {
                gridTemplateColumns: '2fr 3fr 3fr',
              },
            }}
          >
            <div
              tw="flex flex-col items-start -my-3"
              css={{
                '> *': tw`my-3`,
              }}
            >
              <img
                src="/images/jumppoint/jumppoint_logo_white.webp"
                height="44px"
                width="219px"
                alt="jumppoint"
                tw="h-8 w-auto"
              />
              <hr tw="flex-1 invisible hidden sm:block" />
              <p tw="justify-self-end">© Jarvix</p>
            </div>
            <VStack tw="gap-6">
              <h2 tw="text-base text-white text-opacity-80">網站連結</h2>
              <VStack as="ul" tw="gap-4 list-none text-sm font-light leading-tight">
                <li>
                  <Link href="#">
                    <a href="">網站連結</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a href="">首頁</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a href="">產品及服務</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a href="">使用教學</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a href="">關於我們</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a href="">常見問題</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a href="">立即申請</a>
                  </Link>
                </li>
              </VStack>
            </VStack>
            <VStack tw="gap-6 list-none text-sm font-light leading-tight place-content-start">
              <h2 tw="text-base text-white text-opacity-80">聯絡我們</h2>
              <VStack as="ul" tw="gap-4 list-none text-sm font-light leading-tight">
                <li>
                  <p>
                    香港九龍新蒲崗
                    <br />
                    大有街31號善美工業大廈10樓01室
                  </p>
                </li>
                <li>
                  <a href="">info@jumppoint.io</a>
                </li>
                <li>
                  <a href="tel:+852-3618-7750">+852 3618 7750</a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=85260588546"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +852 6058 8546 (WhatsApp)
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=85294069267"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +852 9406 9267 (WhatsApp)
                  </a>
                </li>
              </VStack>

              <HStack tw="gap-4">
                <SvgAppStore tw="h-8" />
                <SvgGooglePlay tw="h-8" />
              </HStack>
            </VStack>
          </div>
        </SLayout>
      </Section>
    </>
  )
}

export default Layout
