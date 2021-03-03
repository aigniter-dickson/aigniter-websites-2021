import { HStack, VStack } from 'app/components/core/Stack'
import LayoutContainer from 'app/layouts/components/LayoutContainer'
import Layout from 'app/layouts/Layout'
import tw, { css, theme } from 'twin.macro'
import { Image, Link, useRouter } from 'blitz'

import {
  Section,
  SLayout,
  SHeadingGp,
  SectionTitle,
  SectionTitle2,
  SectionTitle3,
  SectionTitle4,
} from 'app/layouts/components/Section'

import HeartOutline from 'assets/icons/eva-icons/HeartOutline'
import { useState } from 'react'
import { ArrowForward } from '@/assets/icons/eva-icons'
import Intro from '@/content/jumppoint/_common/Intro'
import FaqList from '../_common/CtaFaq'
import Phone from '@/app/components/core/mockups/Phone'

import useCaseServicesData from 'content/jumppoint/usecase-serivces/data'
import CtaSignup from '../_common/CtaSignup'
import SvgAppStore from '@/assets/AppStore'
import SvgGooglePlay from '@/assets/GooglePlay'

const Faq: import('blitz').BlitzPage = () => {
  const { pathname } = useRouter()

  return (
    <>
      <FaqList />
    </>
  )
}

Faq.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Faq
