import Head from "next/head";

export default function ProxyPage() {
  return (
    <main className="text-center py-20 md:px-20">
      <Head>
        <title>edgyDERP — edgy.network</title>
      </Head>
      <h1 className="text-white pb-3 text-6xl font-bold leading-relaxed">
        edgyDERP
      </h1>
      <p className="text-green-300 leading-relaxed tracking-tighter text-2xl">
        Custom Tailscale™ DERP Servers
      </p>
      <div className="text-left border-2 rounded border-green-300 px-5 py-5 mt-10">
        <h3 className="text-white text-left text-2xl mt-2">
          Konfigurasi
          <a
            className="text-green-300"
            href="https://login.tailscale.com/admin/acls/file"
          >
            (Access Controls)
          </a>
        </h3>
        <div className="border rounded border-white border-dotted px-5 py-5 my-8 text-green-300 overflow-x-auto">
          <pre>
            {`{
  "derpMap": {
		"Regions": {
			"900": {
				"RegionID":   900,
				"RegionCode": "cgk",
				"RegionName": "Jakarta",
				"Nodes": [{
					"Name":     "1",
					"RegionID": 900,
					"HostName": "derp.edgy.network",
				}],
			},
		},
	},
}`}
          </pre>
        </div>
        <p className="_font-secondary text-white leading-relaxed">
          Pelajari lebih lanjut tentang Tailscale DERP Servers{" "}
          <a href="https://tailscale.com/kb/1118/custom-derp-servers/">
            disini.
          </a>
        </p>
        <h3 className="text-white text-left text-2xl mt-7 text-green-300">
          Pengujian
        </h3>
        <p className="_font-secondary text-white leading-relaxed">
          Jalankan <code className="text-green-300">tailscale netcheck</code>{" "}
          (GNU/Linux dan Windows) atau{" "}
          <code className="text-green-300">
            /Applications/Tailscale.app/Contents/MacOS/Tailscale netcheck
          </code>{" "}
          (Mac OS), di bagian "DERP latency" atau Nearest DERP (jika hoki) akan
          ada entry baru dengan nama Jakarta. Keluarannya kurang lebih seperti
          ini:
        </p>
        <div className="border rounded border-white border-dotted px-5 py-5 mt-8 text-green-300 overflow-x-auto text-sm">
          <pre>{`$ tailscale netcheck

Report:
* UDP: true
* IPv4: yes, 116.xxx.xxx.xxx:64408
* IPv6: no, but OS has support
* MappingVariesByDestIP: false
* HairPinning: false
* PortMapping:
* CaptivePortal: false
* Nearest DERP: Jakarta
* DERP latency:
  - cgk: 5.5ms   (Jakarta)
  - sin: 26.3ms  (Singapore)
  - hkg: 78.6ms  (Hong Kong)
  - blr: 85.2ms  (Bangalore)
  - tok: 95.6ms  (Tokyo)
  - par: 174.8ms (Paris)
  - lhr: 174.9ms (London)
  - sea: 174.9ms (Seattle)
  - fra: 176.8ms (Frankfurt)
  - mad: 181.7ms (Madrid)
  - ams: 185.6ms (Amsterdam)
  - sfo: 190.1ms (San Francisco)
  - lax: 200.8ms (Los Angeles)
  - den: 212.2ms (Denver)
  - waw: 219.5ms (Warsaw)
  - dfw: 223.3ms (Dallas)
  - ord: 231.3ms (Chicago)
  - hnl: 234.5ms (Honolulu)
  - nyc: 246.1ms (New York City)
  - mia: 249ms   (Miami)
  - tor: 249ms   (Toronto)
  - syd: 252.9ms (Sydney)
  - jnb: 337.5ms (Johannesburg)
  - dbi: 345.5ms (Dubai)
  - sao: 427.8ms (São Paulo)
`}</pre>
        </div>

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
          Sumber kode dari Derper berada di{" "}
          <a href="https://github.com/tailscale/tailscale/tree/main/cmd/derper">
            tailscale/tailscale
          </a>{" "}
          yang berada di GitHub.
        </p>
        <h3 className="text-white text-left text-2xl mt-7 text-green-300">
          Sangkalan
        </h3>
        <p className="_font-secondary text-white leading-relaxed mb-3">
          edgyDERP tidak terkait ataupun berafiliasi dengan Tailscale. Tailscale
          adalah merek dagang terdaftar dari Tailscale Inc.
        </p>
      </div>
    </main>
  );
}
