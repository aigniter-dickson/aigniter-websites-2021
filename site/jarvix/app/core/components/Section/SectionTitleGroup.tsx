import { chakra, SimpleGrid } from '@chakra-ui/react'

export type SectionTitleGroupProps = {
  children: React.ReactNode
  className?: string
}

export const SectionTitleGroup = chakra(({ children, className }: SectionTitleGroupProps) => (
  <SimpleGrid as="hgroup" spacing={[4]} {...{ className }}>
    {children}
  </SimpleGrid>
))

export default SectionTitleGroup
