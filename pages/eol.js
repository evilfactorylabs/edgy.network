import Head from 'next/head'

export default function EOLPage() {
  return (
    <main className='text-center py-20 md:px-20'>
      <Head>
        <title>EOL — edgy.network</title>
      </Head>
      <h1 className='text-white pb-3 text-6xl font-bold leading-loose'>
        EOL — so long and goodnight
      </h1>
      <p className='text-green-300 leading-loose tracking-tighter text-2xl'>
        what's the worst that i can say? "things are better if i stay"
      </p>
      <div className="md:w-10/12 lg:w-7/12 mx-auto">
        <div className='text-left pt-10 mt-10'>
          <p className='_font-secondary text-white leading-loose mb-8'>
            Jul 19, 2021 is the first time I released this project to the public — it was 3 years ago as I wrote this. There are several DNS resolvers out there, yet I joined the party with a primary focus on low latency and "edgy" features like DNS-Over-QUIC and Oblivious DoH. Zero-logging, however, is not a feature, it's in the DNA.
          </p>
          <p className='_font-secondary text-white leading-loose mb-8'>
            And today, there are tons of private; no-log, privacy-respecting DNS resolvers out there. Some are better and some are the best.
          </p>
          <p className='_font-secondary text-white leading-loose mb-8'>
            I also believe internet should sucks less. If you don't know what the internet looks like today, just turn off your uBlock Origin and DNS Sinkhole and that's what most internet users see and feel.
          </p>
          <p className='_font-secondary text-white leading-loose mb-8'>
            In an alternate universe, or on my other side, making the internet less sucks means just leaving it alone. Go offline, touch <span className="line-through">grace</span> grass, read books, explore the city, go to new places — enjoy the screen being off.
          </p>
          <p className='_font-secondary text-white leading-loose mb-8'>
            And now, my mobility is more... dynamic than before. I don't live in one place for a long time anymore. And for a reason, I always use consumer VPNs whenever I'm online outside my home network and use the DNS provided by my VPN provider as I trust them.
          </p>
          <p className='_font-secondary text-white leading-loose mb-8'>
            To summarize, I will rarely use edgyDNS anymore and plan to shut it down. The service (including edgyDERP) <span className="text-green-300">will be live until August 10, 2024</span>, and I hope you guys use the alternatives. My personal recommendations are <a href="https://nextdns.io">NextDNS</a>, <a href="https://quad9.net">Quad9</a> and <a href="https://mullvad.net/en/help/dns-over-https-and-dns-over-tls">Mullvad</a>, but it would be great if you use a self-hosting solution like <a href="https://github.com/AdguardTeam/AdGuardHome">AdGuardHome</a>, <a href="https://github.com/0xERR0R/blocky">Blocky</a>, or <a href="https://github.com/pi-hole/pi-hole">Pi-hole</a>!
          </p>
          <p className='_font-secondary text-white leading-loose mb-8'>
            I have no idea how many users of the edgyDNS has since I don't log anything, but as a good internet citizen, I should say farewell and not ghost you all.
          </p>
          <p className='_font-secondary text-white leading-loose mb-8'>
            Thank you for trusting edgyDNS! The sunset is beautiful, isn't it?
          </p>
        </div>
      </div>
    </main>
  )
}
