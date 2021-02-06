import React, { ReactNode } from 'react'

import Link from 'next/link'
import { tw } from 'twind'

import { config } from '../utils/Config'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => (
  <div className={tw`antialiased w-full text-gray-700`}>
    {props.meta}

    <div className={tw`max-w-screen-md mx-auto`}>
      <div className={tw`border-b border-gray-300`}>
        <div className={tw`pt-16 pb-8`}>
          <div className={tw`font-bold text-3xl text-gray-900`}>
            {config.title}
          </div>
          <div className={tw`text-xl`}>{config.description}</div>
        </div>
        <div>
          <ul className={tw`flex flex-wrap text-xl`}>
            <li className={tw`mr-6`}>
              <Link href="/">
                <a
                  className={tw`text-gray-700 border-none hover:text-gray-900`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={tw`mr-6`}>
              <Link href="/about/">
                <a
                  className={tw`text-gray-700 border-none hover:text-gray-900`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className={tw`mr-6`}>
              <a
                className={tw`text-gray-700 border-none hover:text-gray-900`}
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={tw`py-5 text-xl content`}>{props.children}</div>

      <div className={tw`border-t border-gray-300 text-center py-8 text-sm`}>
        © Copyright {new Date().getFullYear()} {config.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </div>
)

export { Main }
