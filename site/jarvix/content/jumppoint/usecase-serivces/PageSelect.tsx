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
export const PageSelect: import('react').JSXElementConstructor<Props> = (props) => {
  const { options, ...rest } = props

  return (
    <div tw="flex justify-center" {...rest}>
      {options.map(({ key, label, active, href }) => (
        <Link href={href}>
          <a
            href={href}
            key={key}
            id={key}
            css={{
              ...tw`flex items-center justify-center h-10 px-8 text-sm -mx-0.5px border`,
              ...tw`first:rounded-l-full last:rounded-r-full`,
              ...tw`sm:(px-16)`,
              ...tw`border-brand-jmpt text-brand-jmpt`,
              ...(active && tw`bg-brand-jmpt text-white`),
            }}
          >
            <span>{label}</span>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default PageSelect
