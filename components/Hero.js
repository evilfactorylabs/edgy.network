export default function Hero() {
  const learnMore = () => {
    window.scrollTo({ top: 666 + 666 / 3.3, behavior: 'smooth' })
  }

  return (
    <div className='grid lg:grid-cols-2'>
      <div className='col-start1'>
        <div className='text-white w-12/12'>
          <h2 className='lg:text-5xl text-4xl text-green-300 font-bold lg:leading-relaxed tracking-tighter mb-3'>
            Private internet as it should be
          </h2>
          <p className='_font-secondary lg:leading-relaxed lg:text-xl text-md md:pr-10'>
            edgy.network helps protect your internet activity from the
            advertising network; trackers, malware, spyware, cryptojacking,
            ransomware, scam, phishing — end to end.
          </p>
          <button
            onClick={learnMore}
            className='hover:bg-green-500 hover:border-green-500 w-full md:w-auto hover:text-white _font-secondary inline-block mt-7 px-6 rounded-sm border-2 border-green-300 py-3 text-white font-bold text-center'
          >
            Learn More
          </button>
        </div>
      </div>
      <div className='col-start1 text-white px-9 pt-5 hidden'>
        <div className='border-2 rounded border-white px-10 py-10 _very-shadow'>
          <h2 className='text-2xl text-bold mb-5'>
            This is the (minimal) information we collect from you regarding your
            internet connection
          </h2>
          <div className='_font-secondary text-green-300'>
            <p className='leading-relaxed'>
              Your IP: {`clientIP`} ({`clientISPWithASN`})
            </p>
            <p className='leading-relaxed'>
              Your DNS: {`clientDNSIP`} ({`clientDNSIPWithASN`})
            </p>
            <hr className='border-1 border-white my-5' />
            <p className='italic text-white'>
              The internet is all about trust, and you need to trust them to
              handle your internet activities from answering DNS queries,
              forwarding packets, and protecting you from any security threats —
              if you really mean it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
