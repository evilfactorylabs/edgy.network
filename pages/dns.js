import Head from "next/head";

export default function DNSPage() {
  return (
    <main className="text-center py-20 md:px-20">
      <Head>
        <title>edgyDNS — edgy.network</title>
      </Head>
      <h1 className="text-white pb-3 text-6xl font-bold leading-relaxed">
        edgyDNS
      </h1>
      <p className="text-green-300 leading-relaxed tracking-tighter text-2xl">
        Recursive DNS Resolvers yang pribadi dan yoi{" "}
      </p>
      <div className="text-left border-2 rounded border-green-300 px-5 py-5 mt-10">
        <h3 className="text-white text-left text-2xl mt-2 text-green-300">
          Konfigurasi
        </h3>
        <p className="_font-secondary text-white leading-relaxed">
          Saat ini kami hanya melayani permintaan DNS melalui protokol yang aman
          (HTTPS/TLS) karena kemungkinan terjadinya DNS hijacking di layanan
          internet Indonesia masih relatif banyak.
        </p>
        <ul className="text-white pt-5 text-left px-10 list-disc">
          <li className="mb-3">
            DNS-Over-HTTPS (DoH, recommended)
            <span className="pl-2 text-pink-300">
              https://edgy-dns.com/dns-query
            </span>
          </li>
          <li className="mb-3">
            DNS-Over-TLS (DoT, not recommended)
            <span className="pl-2 text-pink-300">tls://edgy-dns.com:853</span>
          </li>
          <li className="mb-3 opacity-60">
            DNS-Over-QUIC (DoQ, under maintenance)
            <span className="pl-2 text-pink-300">quic://edgy-dns.com:784</span>
          </li>
        </ul>
        <p className="_font-secondary text-white leading-relaxed">
          Sebagai catatan, edgyDNS tidak ditujukkan sebagai "Bootstrap DNS" dan
          tidak pernah dimaksudkan untuk menjadi itu.
        </p>
        <h3 className="text-white text-left text-2xl mt-7 text-green-300">
          Pengujian
        </h3>
        <p className="_font-secondary text-white leading-relaxed">
          Lakukan query untuk domain{" "}
          <span className="text-pink-300">coba.dong</span>, jika jawabannya
          adalah <span className="text-pink-300">10.6.6.6</span> berarti kamu
          sudah menggunakan edgyDNS. Jika jawabannya adalah "bogus NXDomain",
          kemungkinan ISP kamu yang menjawab DNS Query tersebut.
        </p>
        <h3 className="text-white text-left text-2xl mt-7 text-green-300">
          Variasi
        </h3>
        <p className="_font-secondary text-white leading-relaxed">
          Terdapat 2 alternatif server yang melakukan penyaringan{" "}
          <em>tidak seradikal yang utama</em> dan bahkan ada yang{" "}
          <em>tidak melakukan penyaringan sama sekali:</em>
        </p>
        <ul className="text-white pt-5 pb-2 text-left px-10 list-disc">
          <li className="mb-3">
            Clean (hanya memblokir ransomware dan malware)
            <span className="pl-2 text-pink-300">
              https://clean.edgy-dns.com/dns-query
            </span>
          </li>
          <li className="mb-3">
            Pure (tidak melakukan pemblokiran sama sekali)
            <span className="pl-2 text-pink-300">
              https://pure.edgy-dns.com/dns-query
            </span>
          </li>
        </ul>
        <p className="_font-secondary text-white leading-relaxed">
          Clean ditujukan untuk pengguna yang biasanya memiliki sistem
          penyaringan sendiri dan yang Pure ditujukan untuk pengguna yang
          menjalankan DNS Server nya sendiri.
        </p>
        <h3 className="text-white text-left text-2xl mt-7 text-green-300">
          Bantuan
        </h3>
        <p className="_font-secondary text-white leading-relaxed">
          Untuk saat ini, silahkan buat diskusi di repository{" "}
          <a href="https://github.com/evilfactorylabs/edgy.network/discussions/new">
            evilfactorylabs/edgy.network
          </a>{" "}
          atau bisa dengan kirim DM via Twitter ke{" "}
          <a href="https://evlfctry.pro/twitter">@evilfactorylabs</a> untuk
          jalur pribadi.
        </p>
        <h3 className="text-white text-left text-2xl mt-7 text-green-300">
          Sumber Kode
        </h3>
        <p className="_font-secondary text-white leading-relaxed mb-3">
          Segala berkas terkait konfigurasi & filters berada di repository{" "}
          <a href="https://github.com/evilfactorylabs/gatekeeper">
            evilfactorylabs/gatekeeper
          </a>{" "}
          yang berada di GitHub.
        </p>
      </div>
    </main>
  );
}
