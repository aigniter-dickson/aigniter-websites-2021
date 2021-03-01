import tw from 'twin.macro'

export const HStack = tw.div`grid w-full grid-flow-col`
export const VStack = tw.div`grid w-full grid-flow-row`

export type StackProps = Partial<
  import('react').PropsWithChildren<{
    direction: 'column' | 'row'
    spacing?: any
  }>
>

export const Stack = (props: StackProps) => {
  const { direction, children, ...rest } = props
  const flow = direction === 'row' ? tw`grid-flow-row` : tw`grid-flow-col`

  return (
    <div css={[tw`grid w-full`, flow]} {...rest}>
      {children}
    </div>
  )
}

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
