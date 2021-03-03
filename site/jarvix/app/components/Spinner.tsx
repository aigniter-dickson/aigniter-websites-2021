import tw, { css } from 'twin.macro'

export const Spinner = () => (
  <div
    css={{
      ...tw`rounded-full border-2 border-white border-opacity-20`,
      borderBottomColor: 'currentcolor',
      height: '1.25em',
      width: '1.25em',
    }}
  ></div>
)

export default Spinner
