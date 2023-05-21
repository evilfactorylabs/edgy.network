import Link from "next/link";

export default function DNSFragment() {
  return (
    <div className="text-white">
      <h3 className="text-green-300 text-4xl mb-3 tracking-tighter">
        DNS Resolvers
      </h3>
      <p className="_font-secondary leading-relaxed mb-5">
        It always starts with{" "}
        <a href="https://en.wikipedia.org/wiki/Domain_Name_System">DNS</a>.
      </p>
      <p className="_font-secondary leading-relaxed mb-5">
        DNS is one of the core of the internet. For instance, when you visit
        netflix.com, the DNS resolvers will translate netflix.com into an IP
        address like 3.251.50.149 first because computers can only talk through
        their IP addresses and we—as humans—remember words rather than numbers
        more easily.
      </p>
      <p className="_font-secondary leading-relaxed my-5">
        But sometimes the services we use and love send requests to something we
        have no control over like{" "}
        <a href="https://blog.mozilla.org/en/internet-culture/mozilla-explains/what-is-a-web-tracker/">
          third-party trackers
        </a>
        . Or maybe something that makes them use your computer's CPU to{" "}
        <a href="https://www.wired.com/story/cryptojacking-cryptocurrency-mining-browser/">
          mine cryptocurrency
        </a>{" "}
        right from your browser. Or maybe some random{" "}
        <a href="https://en.wikipedia.org/wiki/Advance-fee_scam">
          prince from Nigeria
        </a>{" "}
        sends you a link in an email that directs you to a scam, or worse, a{" "}
        <a href="https://www.phishing.org/what-is-phishing">"phishing"</a> site
        that promises you an easy $31,337,000 money.
      </p>
      <div className="border-2 border-green-300 rounded-sm py-3 px-3">
        <img
          loading="lazy"
          alt="edgyDNS diagram"
          src="/img/jw2jfiq9.png"
          width="1244"
          height="478"
        />
      </div>
      <p className="_font-secondary leading-relaxed my-5">
        Anyways, edgyDNS will protect your from that kind of threats done at the
        DNS level. Kinda like a firewall but with almost zero-config required.
        This kind of thing is known as a{" "}
        <a href="https://www.sans.org/reading-room/whitepapers/dns/dns-sinkhole-33523">
          "DNS Sinkhole"
        </a>{" "}
        if you're curious.
      </p>
      <p className="_font-secondary leading-relaxed my-5">
        And also, with some goodies:
      </p>
      <ul className="list-disc px-4 _font-secondary">
        <li className="mb-3 leading-relaxed">
          Native IPv6,{" "}
          <a href="https://datatracker.ietf.org/doc/html/rfc8484">DoH</a>,{" "}
          <a href="https://datatracker.ietf.org/doc/html/rfc7858">DoT</a>,{" "}
          <a
            className="opacity-60"
            href="https://datatracker.ietf.org/doc/html/rfc9000"
          >
            DoQ (under maintenance)
          </a>
          ,{" "}
          <a className="opacity-60" href="https://www.dnscrypt.org/">
            DNSCrypt (under maintenance)
          </a>{" "}
          support to give you more choices
        </li>
        <li className="mb-3 leading-relaxed">
          No{" "}
          <a href="https://datatracker.ietf.org/doc/html/rfc7871">
            EDNS Client Subnet (ECS)
          </a>{" "}
          to give you{" "}
          <a href="https://00f.net/2013/08/07/edns-client-subnet/">
            more privacy
          </a>
        </li>
        <li className="mb-3 leading-relaxed">
          No logs are ever written to disk, to give you even more privacy
        </li>
        <li className="mb-3 leading-relaxed">
          Block requests to advertising networks, trackers, phishing sites, etc
          etc, to gives you more protection
        </li>
        <li className="mb-3 leading-relaxed">
          Queries are secured and validated with{" "}
          <a href="https://datatracker.ietf.org/doc/html/rfc4033">DNSSEC</a>, to
          give you even more protection
        </li>
        <li className="mb-3 leading-relaxed">
          Powered by Open Source technology from{" "}
          <a href="https://github.com/0xERR0R/blocky">blocky</a>,{" "}
          <a href="https://github.com/NLnetLabs/unbound">Unbound</a>, to{" "}
          <a href="https://github.com/PowerDNS/pdns">PowerDNS</a> — very no
          proprietary software!
        </li>
        <li className="mb-3 leading-relaxed">
          Experimental support for community-powered alternative{" "}
          <a href="https://en.wikipedia.org/wiki/Root_name_server">
            Root Servers{" "}
          </a>
          from <a href="https://www.opennic.org/">OpenNIC</a> to{" "}
          <a href="https://handshake.org/">Handshake</a> — very edgy!
        </li>
        <li className="mb-3 leading-relaxed">
          Non-cached domains are queried{" "}
          <a href="https://www.cloudflare.com/learning/dns/what-is-recursive-dns/">
            recursively
          </a>{" "}
          by our own upstream — very independent!
        </li>
        <li className="mb-3 leading-relaxed">
          Servers hosted in Indonesia via the{" "}
          <a href="https://aws.amazon.com/about-aws/global-infrastructure/">
            Amazon Web Services
          </a>{" "}
          (ap-southeast-3) network — very less latency!
        </li>
      </ul>
      <p className="_font-secondary leading-relaxed my-5">
        You can <Link href="/dns">click here</Link> to start using edgyDNS.
      </p>
    </div>
  );
}
