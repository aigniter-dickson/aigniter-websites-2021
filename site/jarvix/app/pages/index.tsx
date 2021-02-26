const Index: import('blitz').BlitzPage = () => <div />
Index.suppressFirstRenderFlicker = true
export default Index

export const getServerSideProps = () => ({
  redirect: {
    destination: '/products/jumppoint',
    permanent: false,
  },
})
