import tw, { css, theme, styled } from 'twin.macro'
import { useForm } from 'react-hook-form'

import Layout from '@/app/layouts/Layout'
import { VStack } from '@/app/components/core/Stack'
import { Section, SectionTitle, SHeadingGp, SLayout } from '@/app/layouts/components/Section'
import LayoutContainer from '@/app/layouts/components/LayoutContainer'
import { string } from 'zod'
import { Spinner } from '@/app/components/Spinner'
import { useState } from 'react'
import { useRouter } from 'blitz'

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

const In = tw.input`border border-brand-jmpt`

type FormData = {
  contactName: string
  contactNumber: string
  email: string
  company: string
  comments: string
}

const inputApiName = {
  contactName: 'entry.666852272',
  contactNumber: 'entry.602846985',
  email: 'entry.1826023197',
  company: 'entry.55669155',
  comments: 'entry.141271830',
}

const endpoint =
  'https://docs.google.com/forms/u/1/d/e/1FAIpQLSekuALsiNMAhlA5-pKYY0mWdRIkv0JBck1CLH0mGv7Pu0a3Lg/formResponse'

const submitWithIframe = (data: Record<string, any>) =>
  new Promise((res, rej) => {
    const _frame = `_${new Date().getTime()}${Math.random()}`

    const form = Object.assign(document.createElement('form'), {
      action: endpoint,
      method: 'post',
      target: _frame,
    })

    const iframe = Object.assign(document.createElement('iframe'), {
      id: _frame,
      name: _frame,
    })

    for (const [name, value] of Object.entries(data)) {
      form.appendChild(
        Object.assign(document.createElement('input'), {
          name,
          value,
        }),
      )
    }

    const container = Object.assign(document.createElement('div'), {
      style: 'display: none',
    })
    container.appendChild(iframe)
    container.appendChild(form)
    document.body.appendChild(container)

    Object.assign(iframe, {
      onload: res,
      onerror: rej,
    })

    form.submit()
  })

const Signup: import('blitz').BlitzPage = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    // const response = await fetch(endpoint, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   cache: 'no-cache',
    //   // credentials: 'omit',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // redirect: 'follow',
    //   // referrerPolicy: 'no-referrer',
    //   body: JSON.stringify(data), // body data type must match "Content-Type" header
    // })
    // console.log(await response.json())

    await submitWithIframe(
      Object.entries(data).reduce(
        (acc, [name, value]) => ({
          ...acc,
          [(inputApiName as any)[name]]: value,
        }),
        {},
      ),
    )

    setTimeout(
      () =>
        router.push(
          router.pathname
            // one level back
            .split('/')
            .slice(0, -1)
            .join('/'),
        ),
      1000,
    )
  }

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
                <label data-class="label">聯絡名稱 *</label>
                <Input
                  data-class="input"
                  type="text"
                  placeholder=""
                  name="contactName"
                  autoComplete="org"
                  ref={register({ required: true, maxLength: 20 })}
                />
              </Field>
              <Field>
                <label data-class="label">聯絡電話號碼 *</label>
                <Input
                  data-class="input"
                  type="tel"
                  placeholder=""
                  name="contactNumber"
                  ref={register({ required: true, pattern: /^[0-9]+$/i })}
                />
              </Field>
              <Field>
                <label data-class="label">email</label>
                <Input
                  data-class="input"
                  type="email"
                  placeholder=""
                  name="email"
                  ref={register({})}
                />
              </Field>
              <Field>
                <label data-class="label">公司名稱</label>
                <Input
                  data-class="input"
                  type="tel"
                  placeholder=""
                  name="company"
                  ref={register({ pattern: /^[A-Za-z]+$/i })}
                />
              </Field>

              <Field>
                <label data-class="label">備註留言</label>
                <TextArea
                  //
                  name="comments"
                  placeholder="輸入你的信息"
                  rows={4}
                  ref={register}
                />
              </Field>

              <hr tw="invisible" />

              <Button type="submit" tw="w-full">
                {isLoading ? <Spinner /> : <span>提交</span>}
              </Button>
            </VStack>
          </form>

          {/*  */}
        </SLayout>
      </LayoutContainer>
    </Section>
  )
}

Signup.getLayout = (page) => <Layout title="Signup">{page}</Layout>

export const url = '/jumppoint/signup'

export default Signup
