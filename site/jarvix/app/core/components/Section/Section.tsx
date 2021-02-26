import { Box, Center, chakra, Container, SimpleGrid } from '@chakra-ui/react'

export type SectionProps = {
  children: React.ReactNode
  className?: string
  sectionBackground?: React.ReactNode
}

export const Section = chakra(
  ({ children: SectionBody, className, sectionBackground }: SectionProps) => (
    <Box as="section" position="relative" w="full" {...{ className }}>
      {
        // background mask
      }
      {sectionBackground && (
        <Box position="absolute" w="full" h="full" pointerEvents="none">
          <Box position="relative" w="full" h="full">
            {sectionBackground}
          </Box>
        </Box>
      )}
      {
        // center container with max width
      }
      <Center position="relative">
        <Container maxW="container.lg">
          <SimpleGrid spacing={[8]} py={[24]} px={[4]}>
            {SectionBody}
          </SimpleGrid>
        </Container>
      </Center>
    </Box>
  ),
)

export default Section
