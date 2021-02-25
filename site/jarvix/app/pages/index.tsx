// # Components
import Layout from 'app/core/layouts/Layout'
import { Box } from '@chakra-ui/react'
import React from 'react'
import Nav from 'app/core/components/layouts/Nav'

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: import('blitz').BlitzPage = () => {
  return (
    <div>
      <Nav />
      <Box as="main">main</Box>
      <div>main</div>
      <Box as="footer"></Box>
    </div>
  )
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
