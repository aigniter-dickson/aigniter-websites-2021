import tw from 'twin.macro'

import { HStack, VStack } from 'app/components/core/Stack'
import LayoutContainer from 'app/layouts/components/LayoutContainer'

export const Section = tw.section`relative w-screen` // bg-brand-jmpt
export const SContainer = tw(LayoutContainer)`px-0`
export const SLayout = tw(VStack)`gap-8 py-32 px-8`
export const SHeadingGp = tw(VStack)`gap-4`

export const SectionTitle = tw.h1`text-3xl md:text-4xl font-semibold leading-tight! tracking-tight text-brand-jmpt`

export const SectionTitle2 = tw.h2`text-xl md:text-2xl font-semibold leading-tight! tracking-tight `

export const SectionTitle3 = tw.h3`text-lg md:text-xl font-medium leading-tight! tracking-tight text-opacity-50`

export const SectionTitle4 = tw.h4`text-base md:text-lg font-medium leading-none! tracking-tight text-opacity-50`
