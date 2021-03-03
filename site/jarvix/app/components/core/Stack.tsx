import tw from 'twin.macro'

export const VStack = tw.div`grid w-full grid-cols-1 grid-flow-row place-content-start gap-4`
export const HStack = tw.div`grid w-full grid-rows-1 grid-flow-col place-content-start gap-4`

// export type StackProps = Partial<
//   import('react').PropsWithChildren<{
//     direction: 'column' | 'row'
//     spacing?: any
//   }>
// >

// export const Stack = (props: StackProps) => {
//   const { direction, children, ...rest } = props
//   const flow = direction === 'row' ? tw`grid-flow-row` : tw`grid-flow-col`

//   return (
//     <div css={[tw`grid w-full`, flow]} {...rest}>
//       {children}
//     </div>
//   )
// }

// export const VStack = ({ children, direction: _, ...rest }: StackProps) => (
//   <Stack direction="row" {...rest}>
//     {children}
//   </Stack>
// )

// export const HStack = ({ children, direction: _, ...rest }: StackProps) => (
//   <Stack direction="column" {...rest}>
//     {children}
//   </Stack>
// )
