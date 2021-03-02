import tw, { css, theme, styled } from 'twin.macro'
import { useForm } from 'react-hook-form'

import Layout from '@/app/layouts/Layout'
import { VStack } from '@/app/components/core/Stack'
import { Section, SectionTitle, SHeadingGp, SLayout } from '@/app/layouts/components/Section'
import LayoutContainer from '@/app/layouts/components/LayoutContainer'

// const Input = tw.input`block appearance-none rounded
// shadow-sm py-2 px-4 text-base border border-blueGray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-brand-jmpt text-blueGray-700 placeholder-blueGray-300 bg-white`

const baseInputStyle = css({
  ...tw`block appearance-none rounded py-2 px-4`,
  ...tw`outline-none shadow-sm border border-blueGray-200 bg-white`,
  ...tw`focus:(border-transparent ring-2 ring-brand-jmpt)`,
  ...tw`text-blueGray-700 placeholder-blueGray-300`,
})

const Input = styled.input(() => [baseInputStyle])
const TextArea = styled.textarea(() => [baseInputStyle, tw`resize-none`])
const Field = tw(VStack)`gap-2`
const Button = tw.button`justify-self-center flex items-center justify-center h-12 px-8 rounded-full text-white bg-brand-jmpt`

interface IFormInput {
  firstName: string
  lastName: string
  age: number
}

const Signup: import('blitz').BlitzPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit = (data: IFormInput) => console.log(data)

  return (
    <Section>
      <LayoutContainer tw="max-w-md">
        <SLayout>
          <SHeadingGp tw="justify-items-center">
            <SectionTitle tw="text-onSurface text-opacity-80">申請帳戶</SectionTitle>
          </SHeadingGp>
          {/* <script>var submitting=!1;"#signup"==location.hash&&(document.getElementById("contact-form").className+=" is-active no-transition")</script> */}
          <form
            id="signup-form"
            // action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSekuALsiNMAhlA5-pKYY0mWdRIkv0JBck1CLH0mGv7Pu0a3Lg/formResponse"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="on"
          >
            <VStack tw="gap-6">
              <Field>
                <label data-class="label">聯絡名稱</label>
                <Input
                  data-class="input"
                  type="text"
                  placeholder=""
                  name="entry.666852272"
                  autoComplete="org"
                  ref={register({ required: true, maxLength: 20 })}
                />
              </Field>
              <Field>
                <label data-class="label">聯絡電話號碼</label>
                <Input
                  data-class="input"
                  type="tel"
                  placeholder=""
                  name="entry.602846985"
                  ref={register({ pattern: /^[A-Za-z]+$/i })}
                />
              </Field>
              <Field>
                <label data-class="label">email</label>
                <Input
                  data-class="input"
                  type="email"
                  placeholder=""
                  name="entry.1826023197"
                  ref={register({})}
                />
              </Field>
              <Field>
                <label data-class="label">公司名稱</label>
                <Input
                  data-class="input"
                  type="tel"
                  placeholder=""
                  name="entry.55669155"
                  ref={register({ pattern: /^[A-Za-z]+$/i })}
                />
              </Field>

              <Field>
                <label data-class="label">備註留言</label>
                <TextArea
                  //
                  name="entry.141271830"
                  placeholder="輸入你的信息"
                  rows={4}
                  ref={register}
                />
              </Field>

              <Button type="submit" tw="w-full">
                提交
              </Button>
            </VStack>
          </form>
        </SLayout>
      </LayoutContainer>
    </Section>
  )
}

Signup.getLayout = (page) => <Layout title="Signup">{page}</Layout>

export default Signup
