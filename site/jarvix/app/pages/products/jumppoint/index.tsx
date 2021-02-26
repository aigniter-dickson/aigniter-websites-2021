// # Components
import Layout from 'app/core/layouts/Layout'
import { Box, Button, chakra, Heading, HStack, Icon, List, ListItem } from '@chakra-ui/react'
import { NavLayout, NavDimensions } from 'app/core/components/layouts/Nav'
import Header from 'app/core/components/layouts/Header'
import JumppointLogo from 'app/core/components/JumppointLogo'

import { Link } from '@chakra-ui/react'
import { Image, Link as NextLink } from 'blitz'
import { Section, SectionTitleGroup } from 'app/core/components/Section'

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const _Nav = () => (
  <Header>
    <NavLayout>
      {/* logo */}
      <NextLink href="/..." passHref>
        <Button as={Link} variant="ghost">
          <JumppointLogo />
        </Button>
      </NextLink>

      {/* nav items */}
      <HStack as={List}>
        <ListItem>
          <NextLink href="/" passHref>
            <Button as={Link} variant="ghost">
              <span>Landing</span>
            </Button>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/signup" passHref>
            <Button as={Link} rightIcon={<Icon as={Box} />}>
              <span>Signup!</span>
            </Button>
          </NextLink>
        </ListItem>
      </HStack>
    </NavLayout>
  </Header>
)
const Nav = chakra(_Nav)

const Landing: import('blitz').BlitzPage = () => {
  return (
    <>
      <Box as={Nav} />
      <Section
        // mt={-`${NavDimensions.h}`}
        sectionBackground={
          <Box position="absolute" top={-`${NavDimensions.h}`} bottom="0" w="full">
            <Image
              src="/assets/images/bg_1.png"
              layout="fill"
              objectFit="cover"
              alt=""
              aria-hidden
            />
            <Box pos="absolute" w="full" h="full" bg="orange.500" opacity="0.9" />
          </Box>
        }
        color="white"
      >
        <SectionTitleGroup mt={NavDimensions.h}>
          <Heading as="h1">
            <span>hihi</span>
          </Heading>
        </SectionTitleGroup>
      </Section>
      <Box as="main">main</Box>
      <div>main</div>
      <Box as="footer"></Box>
    </>
  )
}

Landing.getLayout = (page) => <Layout title="Jumppoint">{page}</Layout>

export default Landing
