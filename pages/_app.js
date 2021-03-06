import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-50">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
