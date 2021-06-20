import Head from 'next/head'

export default function ProxyPage() {
  return (
    <main className='text-center py-20 md:px-20'>
      <Head>
        <title>edgyPROXY — edgy.network</title>
      </Head>
      <h1 className='text-white pb-3 text-6xl font-bold leading-relaxed'>
        edgyPROXY
      </h1>
      <p className='text-green-300 leading-relaxed tracking-tighter text-2xl'>
        Sembunyikan alamat IP aslimu dari siapapun yang tertarik mengetahuinya
      </p>
      <div className='text-left border-2 rounded border-green-300 px-5 py-5 mt-10'>
        <h3 className='text-white text-left text-2xl mt-2 text-green-300'>
          Konfigurasi
        </h3>
        <ul className='text-white pt-5 text-left px-10 list-disc'>
          <li className='mb-3'>
            IPv6
            <ol className='list-disc pl-3 pt-3 text-pink-300'>
              <li>2001:470:ed00::/48</li>
              <li>2001:470:36:30d::/64</li>
            </ol>
          </li>
          <li className='mb-3'>
            Port
            <ol className='list-disc pl-3 pt-3'>
              <li>
                <span className='text-pink-300'>6565</span> (SOCKS5)
              </li>
              <li>
                <span className='text-pink-300'>6969</span> (SOCKS5 over QUIC,
                membutuhkan <a href='https://github.com/ginuerzh/gost'>gost</a>{' '}
                sebagai klien)
              </li>
            </ol>
          </li>
        </ul>
        <h3 className='text-white text-left text-2xl mt-7 text-green-300'>
          Pengujian
        </h3>
        <p className='_font-secondary text-white leading-relaxed'>
          Lakukan permintaan ke{' '}
          <a href='https://ifconfig.co/json'>ifconfig.co/json</a>, jika response
          nya terdapat ISP yang kamu gunakan, kemungkinan ada masalah di tunnel
          SOCKS5 kamu (yang mungkin diblokir oleh ISP kamu). Selain itu, bisa
          test juga di <a href='https://dnsleaktest.com'>dnsleaktest.com</a>{' '}
          sekaligus untuk memastikan bahwa tidak ada{' '}
          <a href='https://dnsleaktest.com/what-is-a-dns-leak.html'>leak</a> di
          DNS Query yang perangkat kamu lakukan.
        </p>
        <h3 className='text-white text-left text-2xl mt-7 text-green-300'>
          Bantuan
        </h3>
        <p className='_font-secondary text-white leading-relaxed'>
          Untuk saat ini, silahkan buat diskusi di repository{' '}
          <a href='https://github.com/evilfactorylabs/edgy.network/discussions/new'>
            evilfactorylabs/edgy.network
          </a>{' '}
          atau bisa dengan kirim DM via Twitter ke{' '}
          <a href='https://evlfctry.pro/twitter'>@evilfactorylabs</a> untuk
          jalur pribadi.
        </p>
        <h3 className='text-white text-left text-2xl mt-7 text-green-300'>
          Sumber Kode
        </h3>
        <p className='_font-secondary text-white leading-relaxed mb-3'>
          Segala berkas terkait konfigurasi & filters berada di repository{' '}
          <a href='https://github.com/evilfactorylabs/gatekepeer'>
            evilfactorylabs/gatekeeper
          </a>{' '}
          yang berada di GitHub.
        </p>
      </div>
    </main>
  )
}
