import Link from "next/link";

export default function AboutFragment() {
  return (
    <div className="text-white">
      <h3 className="text-green-300 text-4xl mb-3 tracking-tighter">About</h3>
      <p className="_font-secondary leading-relaxed mb-5">
        Hi, I'm <a href="https://rizaldy.club">Rizaldy</a>, the person behind
        this service. Everyday I use my own service on all my devices to protect
        my internet activities, as I advertised it. Since my services doesn't
        log any activity at all, I'm using{" "}
        <a href="https://nsg.ee.ethz.ch/fileadmin/user_upload/theses/MA-2016-47.pdf">
          "local/fake VPN"
        </a>{" "}
        approach on my device to proxy DNS queries so I can find out which
        domain address my device is contacting to, done on my device and never
        leave anywhere (and you probably should too).
      </p>
      <p className="_font-secondary leading-relaxed mb-5">
        The internet is all about trust. You don't have to trust me in handling
        your "internet packets" as they are always end-to-end encrypted (thanks
        to the HTTPS/TLS/QUIC protocols) and in theory, I know your IP address &
        what websites you visit (as well as your ISP) I just don't know what
        content it is and I don't care either.
      </p>
      <p className="_font-secondary leading-relaxed mb-5">
        To help protect user identities—as well as my services—my current
        approach is:
      </p>
      <ul className="list-disc px-4 _font-secondary">
        <li className="mb-3 leading-relaxed">
          No logs are ever written to disk (even to syslog and /dev/stdout)
          because they all belong to /dev/null and they deserve it. When
          something goes wrong, I think the solution is to turn it off and on
          again?
        </li>
        <li className="mb-3 leading-relaxed">
          No native IPv4 support. That's kinda sucks, but I kinda trust in{" "}
          <a href="https://datatracker.ietf.org/doc/html/rfc4941">RFC 4941</a>{" "}
          on "Privacy Extensions for Stateless Address Autoconfiguration in
          IPv6" or something known as Stateless Address Auto Configuration
          (SLAAC) and will look further into what IPv6 can help in protecting
          the identity of internet users.
        </li>
        <li className="mb-3 leading-relaxed">
          No monitoring. Well, actually not really. I use{" "}
          <a href="https://linux.die.net/man/1/vnstat">vnstat(1)</a> to monitor
          network bandwidth usage and{" "}
          <a href="https://linux.die.net/man/8/lsof">lsof(8)</a> basically to
          find out what ports are listening on my server. My service is just to
          forward your internet packets, and that's it.
        </li>
      </ul>
      <p className="_font-secondary leading-relaxed my-5">
        But services cost money, right?
      </p>
      <p className="_font-secondary leading-relaxed mb-5">
        While I can pay for it myself (actually only ~300k IDR/mo) I also offer
        a premium service called <Link href="/plus">edgy+</Link> to make the
        project more sustainable, to show love, and to support me in further
        research related to this domain. You can{" "}
        <Link href="/plus">click here</Link> to learn more about edgy+ in case
        you didn't click on the link above.
      </p>
      <p className="_font-secondary leading-relaxed mb-5">
        My mission is to make the internet a little less sucks by providing a
        DNS sinkhole and masking your identity by providing a Web Proxy. My
        (non-superuser) friends often asked me to do it for them and now I'm
        making it public with some easy-to-follow-ish guides so I don't have to
        do it myself again and also so it can be used for anyone.
      </p>
    </div>
  );
}
