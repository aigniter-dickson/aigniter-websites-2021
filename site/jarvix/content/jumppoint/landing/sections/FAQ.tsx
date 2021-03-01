import { useState } from 'react'
import tw from 'twin.macro'

const FaqItem = ({ title, children }: import('react').PropsWithChildren<{ title: string }>) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        tw="flex items-center justify-between w-full px-4 py-6 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p tw="text-lg font-medium">{title}</p>
        <div tw="flex items-center justify-center w-8 h-8">
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
        </div>
      </button>
      {isOpen && (
        <div tw="p-4 pt-0">
          <p tw="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  )
}

export const FAQ = () => {
  return (
    <div tw="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div tw="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div tw="flex flex-col mb-16 sm:text-center">
          <a href="/" tw="mb-6 sm:mx-auto">
            <div tw="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg tw="w-10 h-10 text-purple-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <div tw="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 tw="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span tw="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  tw="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blueGray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)" width="52" height="24" />
                </svg>
                <span tw="relative">The</span>
              </span>{' '}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p tw="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              rem aperiam, eaque ipsa quae.
            </p>
          </div>
        </div>
        <div tw="divide-y">
          <FaqItem title="The quick, brown fox jumps over a lazy dog?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            rem aperiam, eaque ipsa quae.
          </FaqItem>
          <FaqItem title="The first mate and his Skipper too will do?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            rem aperiam, eaque ipsa quae.
          </FaqItem>
          <FaqItem title="Is the Space Pope reptilian!?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            rem aperiam, eaque ipsa quae.
          </FaqItem>
          <FaqItem title="How much money you got on you?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            rem aperiam, eaque ipsa quae.
          </FaqItem>
        </div>
      </div>
    </div>
  )
}
export default FAQ
