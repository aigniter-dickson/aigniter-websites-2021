import tw from 'twin.macro'

import { HStack, VStack } from 'app/components/core/Stack'
import LayoutContainer from 'app/layouts/components/LayoutContainer'

export const Section = tw.section`relative w-screen` // bg-brand-jmpt
export const SContainer = LayoutContainer
export const SLayout = tw(VStack)`gap-8 py-32 px-8`
export const SHeadingGp = tw(VStack)`gap-4`
