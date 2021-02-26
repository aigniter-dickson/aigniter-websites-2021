// # Components
import Layout from 'app/core/layouts/Layout'
import { Box, Button, chakra, Flex, Heading, HStack, Icon, List, ListItem } from '@chakra-ui/react'
import { NavLayout, NavDimensions } from 'app/core/components/layouts/Nav'
import Header from 'app/core/components/layouts/Header'
import JumppointLogo from 'app/core/components/JumppointLogo'

import { Link } from '@chakra-ui/react'
import { Image, Link as NextLink } from 'blitz'
import { Section, SectionBody, SectionTitleGroup } from 'app/core/components/Section'

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

const _Section = (p: import('react').PropsWithChildren<{}>) => (
  <Box as="section" position="relative" w="full">
    {p.children}
  </Box>
)

const Landing: import('blitz').BlitzPage = () => {
  return (
    <>
      <Nav />
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
        <SectionBody>
          <SectionTitleGroup mt={NavDimensions.h}>
            <JumppointLogo />
            <Heading as="h1" fontSize="4xl">
              可靠、極速
              <br /> 全城最抵​嘅物流格價App
            </Heading>
            <Flex>
              <Button variant="outline">立即免費申請</Button>
            </Flex>
          </SectionTitleGroup>
          {/* <Mockup /> */}
        </SectionBody>
      </Section>
      <Box as="main">main</Box>
      <div>main</div>
      <Box as="footer"></Box>
    </>
  )
}

Landing.getLayout = (page) => <Layout title="Jumppoint">{page}</Layout>

export default Landing
