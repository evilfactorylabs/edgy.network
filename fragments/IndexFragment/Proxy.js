import Link from 'next/link'

export default function ProxyFragment() {
  return (
    <div className='text-white'>
      <h3 className='text-green-300 text-4xl mt-5 mb-3 tracking-tighter'>
        Web Proxy
      </h3>
      <p className='_font-secondary leading-relaxed my-5'>
        Need to mask your real IP address without configuring any VPN? You
        deserve it.
      </p>
      <p className='_font-secondary leading-relaxed my-5'>
        In order to protect our{' '}
        <a href='https://blog.f-secure.com/whats-the-deal-with-network-reputation/'>
          IP address reputation
        </a>
        , at this time we only provide you with routable IPv6 addresses. The
        only drawback is that your current ISP must provide you a IPv6 so your
        computer can talk to us, but we're excited to explore more to break that
        barrier.
      </p>
      <div className='border-2 border-green-300 rounded-sm py-3 px-3'>
        <img
          loading='lazy'
          alt='edgyPROXY diagram'
          src='/img/7zsg9hk1.png'
          width='1244'
          height='478'
        />
      </div>
      <p className='_font-secondary leading-relaxed my-5'>
        Web Proxy don't anonymize your identity, but they can help you hide it.
        As for now we supports:
      </p>
      <ul className='list-disc px-4 _font-secondary'>
        <li className='mb-3 leading-relaxed'>
          <a href='https://shadowsocks.org/en/index.html'>ShadowSocks</a> proxy
        </li>
        <li className='mb-3 leading-relaxed'>
          <a href='https://docs.ginuerzh.xyz/gost/en/socks/'>
            SOCKS5 over QUIC
          </a>{' '}
          proxy, powered by GOST
        </li>
        <li className='mb-3 leading-relaxed'>
          Experimental SOCKS5 proxy to the{' '}
          <a href='https://www.torproject.org/'>TOR</a> network
        </li>
        <li className='mb-3 leading-relaxed'>
          Experimental HTTPS proxy with built-in content blockers, powered by{' '}
          <a href='https://www.privoxy.org/'>Privoxy</a>
        </li>
      </ul>
      <p className='_font-secondary leading-relaxed my-5'>
        You can{' '}
        <Link href='/proxy'>
          <a>click here</a>
        </Link>{' '}
        to start using edgyPROXY (edgyDNS is included!)
      </p>
    </div>
  )
}
