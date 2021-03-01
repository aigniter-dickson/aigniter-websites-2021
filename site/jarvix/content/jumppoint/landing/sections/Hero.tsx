import tw from 'twin.macro'

import { HStack, VStack } from 'app/components/core/Stack'
import { Section, SContainer, SLayout, SHeadingGp } from 'app/layouts/components/Section'

export default function Hero() {
  return (
    <Section>
      <SContainer>
        <SLayout>
          <HStack>
            <VStack>
              <SHeadingGp>
                <p>jumppoint</p>
                <h1>hi</h1>
              </SHeadingGp>
            </VStack>
          </HStack>
        </SLayout>
      </SContainer>
    </Section>
  )
}
