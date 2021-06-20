import Head from 'next/head'

export default function PlusPage() {
  return (
    <main className='text-center py-20 md:px-20'>
      <Head>
        <title>edgy+ — edgy.network</title>
      </Head>
      <h1 className='text-white pb-3 text-6xl font-bold leading-relaxed'>
        edgy+
      </h1>
      <p className='text-green-300 leading-relaxed tracking-tighter text-2xl'>
        very premium — something like being edgy but * 2
      </p>
      <div className='text-left border-2 rounded border-green-300 px-10 py-10 mt-10'>
        <p className='_font-secondary text-white leading-relaxed mb-3'>
          edgy+ adalah layanan premium dan opsional yang khusus ditawarkan
          kepada mereka yang tertarik untuk eksplorasi lebih lanjut, mempelajari
          lebih lanjut, dan mendukung misi yang dimiliki oleh edgy.network.
        </p>
        <p className='_font-secondary text-white leading-relaxed mb-3'>
          Beberapa benefit yang didapatkan antara lain:
        </p>
        <ul className='text-white pt-5 text-left px-10 list-disc _font-secondary pb-5'>
          <li className='leading-relaxed mb-3'>
            Akses ke fitur experimental, seperti: Name resolution untuk protokol
            Handshake, SOCKS5 proxy ke jaringan TOR, dan HTTPS proxy yang
            melakukan "content blocking" namun di level proxy.
          </li>
          <li className='leading-relaxed mb-3'>
            Mendukung riset, dari hal teknikal seperti implementasi{' '}
            <a href='https://blog.cloudflare.com/oblivious-dns/'>
              Oblivious DoH (ODoH)
            </a>{' '}
            sampai yang edukasi seperti terkait IPv6; identitas digital dan
            privasi,
          </li>
          <li className='leading-relaxed mb-3'>
            Membantu R&D. Hal pertama yang ingin dibuat adalah seperti DNSCrypt
            Proxy namun dalam bentuk GUI yang mencatat setiap DNS query yang ada
            dan yang hanya disimpan di perangkat pengguna.
          </li>
          <li className='leading-relaxed mb-3'>
            Menjadi lebih edgy, obviously.
          </li>
        </ul>
        <p className='_font-secondary text-white leading-relaxed mb-3'>
          Jika tertarik untuk menjadi geng edgy+ untuk saat ini hanya bisa
          mendaftar ke "waiting list" dengan cara subscribe ke{' '}
          <a href='https://edgy.substack.com/subscribe'>
            newsletter edgy's frontline
          </a>{' '}
          di Substack. Hal-hal terkait pembaruan dan lain sebagainya akan
          dipublikasikan di publikasi edgy's frontline.
        </p>
      </div>
    </main>
  )
}
