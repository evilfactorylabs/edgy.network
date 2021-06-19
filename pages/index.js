import Head from 'next/head'

import Hero from 'components/Hero'

import { Dns, Proxy, About } from 'fragments/IndexFragment'

export default function IndexPage() {
  return (
    <main>
      <Head>
        <title>Private internet as it should be — edgy.network</title>
      </Head>
      <div className='py-40'>
        <Hero />
      </div>
      <div className='py-20 lg:w-8/12'>
        <Dns />
      </div>
      <div className='py-20 lg:w-8/12'>
        <Proxy />
      </div>
      <div className='py-20 lg:w-8/12'>
        <About />
      </div>
    </main>
  )
}
