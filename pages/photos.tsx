import { ReactElement } from 'react'
import { Layout } from '../components/layouts/layouts'
import { Photo, PhotoGrid } from '../components/layouts/PhotosLayout'
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
      <h1>Photos</h1>
      <PhotoGrid>
        {photos.map(({ id, caption, image }) => (
          <Photo
            key={id}
            url={image.image.publicUrl}
            altText={image.altText}
            id={id}
          />
        ))}
      </PhotoGrid>
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
