

import '../styles/globals.css'
import {useApollo} from '../lib/apolloClient'
import { ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps }) {

  const apolloClient = useApollo(pageProps)
  const getLayout = Component.getLayout ?? ((page: React.Component) => page)

  return (
    <ApolloProvider client={apolloClient}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  )
}

export default MyApp
