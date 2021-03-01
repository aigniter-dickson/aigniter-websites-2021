// export const Container = ({ children }: Required<import('react').PropsWithChildren<{}>>) => (
//   <div className="relative w-full max-w-layout mx-auto">{children}</div>
// )

import tw from 'twin.macro'

export const LayoutContainer = tw.div`relative w-full max-w-layout mx-auto`
export default LayoutContainer
