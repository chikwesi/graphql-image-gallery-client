import { ALL_PHOTOS_QUERY, Photos } from '../components/Photos'
import { addApolloState, initializeApollo } from '../lib/apolloClient'

//Todo: add prop types
function PhotosPage(props) {
  return (
    <div>
      photos
      {/* <Photos></Photos> */}
    </div>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const query = await apolloClient.query({
    query: ALL_PHOTOS_QUERY,
  })
  return addApolloState(apolloClient, {
    props: {...query},
  })
}

export default PhotosPage
