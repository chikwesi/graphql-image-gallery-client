import Head from 'next/head'
import styles from './gallery.module.css'
import Link from 'next/link'
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client';

const SINGLE_UPLOAD_MUTATION = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;

export default function Gallery({ launches }) {
  const apolloClient = new ApolloClient({
    link: createUploadLink({ uri: 'http://localhost:3001/graphql'}),
    cache: new InMemoryCache()
  })

  const [uploadFileMutation] = useMutation(SINGLE_UPLOAD_MUTATION, { client: apolloClient })

  const handleFileChange = ({
    target: {
      files: [firstFile]
    }
  }) => {
    console.log(firstFile)
    uploadFileMutation({ variables: { file: firstFile } }).then(() => {
      apolloClient.resetStore();
    })
  }

  console.log('launches', launches);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gallery!
        </h1>
        <Link href="/">Home</Link>

        <p className={styles.description}>
          my images
        </p>

        <input type="file"
          placeholder="upload file"
          onChange={handleFileChange}
        />
        <div className={styles.grid}>
          <div className={styles.card}>
            asdfas
          </div>
          <div className={styles.card}>
            asfdasdf
          </div>
          <div className={styles.card}>
            asdfas
          </div>
          <div className={styles.card}>
            asfdasdf
          </div>
          <div className={styles.card}>
            asdfas
          </div>
          <div className={styles.card}>
            asfdasdf
          </div>
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
    </div >
  )
}

export async function getStaticProps() {

  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `
  });
  return {
    props: {
      launches: data.launchesPast
    }
  }
}