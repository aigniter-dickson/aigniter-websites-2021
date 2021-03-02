import * as page from '@/content/jumppoint/usecase-serivces'

export default page.default

export const getStaticProps: import('next').GetStaticProps<page.PageProps> = async ({ params }) =>
  // params?.slug
  //   ? {
  //       props: {
  //         page: 'use-cases',
  //       },
  //     }
  //   : {
  //       redirect: {
  //         destination: 'use-cases/food',
  //         permanent: true,
  //       },
  //     }
  ({
    props: {
      page: 'use-cases',
    },
  })

export const getStaticPaths: import('next').GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}
