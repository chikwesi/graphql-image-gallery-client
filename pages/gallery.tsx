import Head from 'next/head'
import styles from './gallery.module.css'
import Link from 'next/link'
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import Button from '../components/button'
import ImageFrame from '../components/image-frame'
import { ChangeEvent, ChangeEventHandler, ReactElement } from 'react'
import Layout from '../components/layout'

const SINGLE_UPLOAD_MUTATION = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      id
    }
  }
`

export default function Gallery({ images }) {
  console.log(images)
  const apolloClient = new ApolloClient({
    link: createUploadLink({ uri: 'http://localhost:3001/graphql' }),
    cache: new InMemoryCache(),
  })

  const [uploadFileMutation] = useMutation(SINGLE_UPLOAD_MUTATION, {
    client: apolloClient,
  })

  const handleFileChange = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    uploadFileMutation({ variables: { file: files[0] } }).then(() => {
      apolloClient.resetStore()
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gallery!</h1>

        <p className={styles.description}>my images</p>
        {/* <Button>Test</Button> */}
        <input
          type="file"
          placeholder="upload file"
          onChange={handleFileChange}
        />
        <div className={styles.grid}>
          {!images && <>Problem loading images</>}
          {images &&
            images.map((image, i) => (
              // <div key={i} className={styles.card}>
              //   <img
              //     src={image.url}
              //     style={{ objectFit: 'cover' }}
              //     width="200px"
              //     height="200px"
              //     alt={image.title} />
              // </div>

              <>
                <ImageFrame src={image.url} key={i} />
                <i>{image.filename}</i>
              </>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

Gallery.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })
  let result = null
  try {
    result = await client.query({
      query: gql`
        query uploads {
          uploads {
            filename
            url
          }
        }
      `,
    })
  } catch (e) {
    console.log('error occurred when fetching data')
  }

  console.log(result)
  if (!result) {
    return {
      props: {},
    }
  }
  const { data } = result

  return {
    props: {
      images: data.uploads,
    },
  }
}
