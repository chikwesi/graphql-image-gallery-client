import { ReactElement } from 'react'
import Layout from '../components/layout'
import { ALL_PHOTOS_QUERY, Photos } from '../components/Photos'
import { addApolloState, initializeApollo } from '../lib/apolloClient'

type Photo = {
  id: string
  image: ImageSource
  caption: string
}

type ImageSource = {
  image: { publicUrl: string }
  altText: string
}

type PhotoPageT = {
  data: { photos: Photo[] }
}

function PhotosPage({ data }: PhotoPageT) {
  const { photos } = data
  return (
    <div>
      <div>photos</div>
      {photos.map(({ id, caption, image }) => (
        <img key={id} src={image.image.publicUrl} />
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const query = await apolloClient.query({
    query: ALL_PHOTOS_QUERY,
  })
  return addApolloState(apolloClient, {
    props: { ...query },
  })
}
PhotosPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default PhotosPage
