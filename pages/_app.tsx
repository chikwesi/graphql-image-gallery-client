import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page: React.Component) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
