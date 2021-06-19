import 'tailwindcss/tailwind.css'
import 'global.css'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <main className='container mx-auto lg:px-9 px-4 antialiased'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
