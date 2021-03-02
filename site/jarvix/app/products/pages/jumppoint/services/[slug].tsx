import * as page from '@/content/jumppoint/usecase-serivces'

export default page.default

export const getStaticProps: import('next').GetStaticProps<page.PageProps> = async ({ params }) =>
  // params?.slug
  //   ? {
  //       props: {
  //         page: 'services',
  //       },
  //     }
  //   : {
  //       redirect: {
  //         destination: 'services/standard-delivery',
  //         permanent: true,
  //       },
  //   }
  ({
    props: {
      page: 'services',
    },
  })

export const getStaticPaths: import('next').GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}
