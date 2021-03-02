import { Link } from 'blitz'
import tw, { css, theme } from 'twin.macro'

type Props = {
  options: Array<{
    key: string
    label: string
    active: boolean
    href: string // import('blitz').LinkProps['href']
  }>
}
export const SectionSelect: import('react').JSXElementConstructor<Props> = (props) => {
  const { options, ...rest } = props

  return (
    <>
      {options.map(({ key, label, active, href }) => (
        <Link href={href}>
          <a
            href={href}
            key={key}
            id={key}
            css={{
              ...tw`flex-1 flex items-center justify-center h-10 px-4 `,
              ...tw`-mx-0.5px border border-gray-300 text-gray-500`,
              ...tw`text-xs whitespace-nowrap overflow-hidden overflow-ellipsis`,
              ...tw`sm:(h-8 flex-none rounded-full px-4 mx-2)`,
              ...(active && tw`bg-brand-jmpt text-white`),
            }}
          >
            <span tw="text-xs whitespace-nowrap overflow-hidden overflow-ellipsis">{label}</span>
          </a>
        </Link>
      ))}
    </>
  )
}

export default SectionSelect
