import 'tailwindcss/tailwind.css'
import 'global.css'

export default function App({ Component, pageProps }) {
  return (
    <main className='container mx-auto px-9'>
      <Component {...pageProps} />
    </main>
  )
}
