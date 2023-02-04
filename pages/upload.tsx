import { ReactElement } from 'react'
import { CreatePhotoForm } from '../components/CreatePhotoForm'
import { Layout } from '../components/layouts/layouts'


function UploadPage() {

  return (
    <div>
      <h1>Upload Photo</h1>
      <CreatePhotoForm></CreatePhotoForm>
    </div>
  )
}

UploadPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default UploadPage
