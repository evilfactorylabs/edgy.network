import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { pathname } = useRouter();

  const isActive = (path) => "/" + path === pathname;

  return (
    <nav className="py-9 grid grid-cols-2 tracking-tighter">
      <div className="col-start1">
        <h1 className="text-green-300 lg:text-3xl text-2xl font-bold tracking-tighter">
          <Link href="/">edgy.network</Link>
        </h1>
      </div>
      <div className="col-start1 text-right md:block hidden">
        <ul className="block text-xl font-bold">
          <li className="inline-block px-4">
            <Link
              href="/dns"
              className={`${
                isActive("dns") ? "text-green-300" : "text-white"
              } hover:text-green-300 hover:no-underline`}
            >
              dns
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link
              href="/proxy"
              className={`${
                isActive("proxy") ? "text-green-300" : "text-white"
              } hover:text-green-300 hover:no-underline`}
            >
              proxy
            </Link>
          </li>
          <li className="inline-block px-4 hidden">
            <Link
              href="/test"
              className={`${
                isActive("test") ? "text-green-300" : "text-white"
              } hover:text-green-300 hover:no-underline`}
            >
              test
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link
              href="/plus"
              className={`${
                isActive("plus") ? "text-green-300" : "text-white"
              } hover:text-green-300 hover:no-underline`}
            >
              edgy+
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
