import tw, { css, styled } from 'twin.macro'

const PhoneContainer = styled.div(() => [
  {
    position: 'relative',
    width: '264px',
    height: '533px',
    padding: '8px',
    borderRadius: '36px',
    background: '#f6f9fc',
    boxShadow: [
      '0 50px 100px -20px rgba(50,50,93,.25)',
      '0 30px 60px -30px rgba(0,0,0,.3)',
      'inset 0 -2px 6px 0 rgba(10,37,64,.35)',
    ],
    userSelect: 'none',
    fontSize: '16px',
  },
])

const Screen = styled.div(() => [
  tw`relative w-full h-full`,
  {
    borderRadius: '32px',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
])

export const Phone = (props: any) => {
  const { children, ...rest } = props
  return (
    <figure {...rest}>
      <PhoneContainer>
        <Screen>{children}</Screen>
      </PhoneContainer>
    </figure>
  )
}
export default Phone
