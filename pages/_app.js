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
      <script
        async
        defer
        data-website-id='153a4ca8-8136-474c-a28a-1c3f84aac49f'
        data-do-not-track='true'
        src='https://u.edgy.network/umami.js'
      ></script>
    </main>
  )
}
