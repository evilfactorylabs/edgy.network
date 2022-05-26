import Head from 'next/head'

export default function DNSPage() {
  return (
    <main className='text-center py-20 md:px-20'>
      <Head>
        <title>edgyDNS — edgy.network</title>
      </Head>
      <h1 className='text-white pb-3 text-6xl font-bold leading-relaxed'>
        edgyDNS
      </h1>
      <p className='text-green-300 leading-relaxed tracking-tighter text-2xl'>
        Recursive DNS Resolvers yang pribadi dan yoi{' '}
      </p>
      <div className='text-left border-2 rounded border-green-300 px-5 py-5 mt-10'>
        <h3 className='text-white text-left text-2xl mt-2 text-green-300'>
          Konfigurasi
        </h3>
        <ul className='text-white pt-5 text-left px-10 list-disc'>
          <li className='mb-3'>
            Plain DNS via IPv6:
            <ol className='list-disc pl-3 pt-3 text-pink-300'>
              <li>2001:470:ed00::53</li>
              <li>2001:470:ed00::666</li>
            </ol>
          </li>
          <li className='mb-3'>
            Plain DNS via <a href="https://yggdrasil-network.github.io" target="_blank" rel="noopener noreferer">yggdrasil</a>:
            <ol className='list-disc pl-3 pt-3 text-pink-300'>
              <li>205:31e6:3a7d:54c9:7adc:601f:ac5b:8146 (peer01.yggdr.id)</li>
            </ol>
          </li>
          <li className='mb-3 truncate opacity-60'>
            DNSCrypt (v1, under maintenance)
            <ol className='pl-3 pt-3'>
              <li>
                provider-name:{' '}
                <span className='text-pink-300'>
                  2.dnscrypt-cert.dns.edgy.network
                </span>
              </li>
              <li>
                resolver-address:{' '}
                <span className='text-pink-300'>[2001:470:ecbf::53]</span>
              </li>
              <li className='truncate'>
                provider-key:{' '}
                <span className='text-pink-300'>
                  C70E:2D3D:E79E:269F:272F:2A17:A53B:BA9A:6CD4:F2D5:EF45:E696:81EE:4158:9713:4ACB
                </span>
              </li>
            </ol>
          </li>
          <li className='mb-3 truncate opacity-60'>
            DNSCrypt (v2, under maintenance)
            <span className='pl-2 text-pink-300'>
              <a href='sdns://AQMAAAAAAAAAGFsyMDAxOjQ3MDplY2JmOjo1M106MTQ0MyDHDi09554mnycvKhelO7qabNTy1e9F5paB7kFYlxNKyyAyLmRuc2NyeXB0LWNlcnQuZG5zLmVkZ3kubmV0d29yaw'>
                sdns://AQMAAAAAAAAAGFsyMDAxOjQ3MDplY2JmOjo1M106MTQ0MyDHDi09554mnycvKhelO7qabNTy1e9F5paB7kFYlxNKyyAyLmRuc2NyeXB0LWNlcnQuZG5zLmVkZ3kubmV0d29yaw
              </a>
            </span>
          </li>
          <li className='mb-3'>
            DNS-Over-HTTPS (DoH)
            <span className='pl-2 text-pink-300'>
              https://edgy-dns.com/dns-query
            </span>
          </li>
          <li className='mb-3'>
            DNS-Over-TLS (DoT)
            <span className='pl-2 text-pink-300'>
              tls://edgy-dns.com:853
            </span>
          </li>
          <li className='mb-3 opacity-60'>
            DNS-Over-QUIC (DoQ, under maintenance)
            <span className='pl-2 text-pink-300'>
              quic://edgy-dns.com:784
            </span>
          </li>
        </ul>
        <h3 className='text-white text-left text-2xl mt-7 text-green-300'>
          Pengujian
        </h3>
        <p className='_font-secondary text-white leading-relaxed'>
          Lakukan query untuk domain{' '}
          <span className='text-pink-300'>coba.dong</span>, jika jawabannya
          adalah <span className='text-pink-300'>10.6.6.6</span> berarti kamu
          sudah menggunakan edgyDNS. Jika jawabannya adalah "bogus NXDomain",
          kemungkinan ISP kamu yang menjawab DNS Query tersebut.
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
          <a href='https://github.com/evilfactorylabs/gatekeeper'>
            evilfactorylabs/gatekeeper
          </a>{' '}
          yang berada di GitHub.
        </p>
      </div>
    </main>
  )
}
