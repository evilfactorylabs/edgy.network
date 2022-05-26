import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const { pathname } = useRouter()

  const isActive = path => "/" + path === pathname

  return (
    <nav className='py-9 grid grid-cols-2 tracking-tighter'>
      <div className='col-start1'>
        <h1 className='text-green-300 lg:text-3xl text-2xl font-bold tracking-tighter'>
          <Link href='/'>
            <a>edgy.network</a>
          </Link>
        </h1>
      </div>
      <div className='col-start1 text-right md:block hidden'>
        <ul className='block text-xl font-bold'>
          <li className='inline-block px-4'>
            <Link href='/dns'>
              <a className={`${isActive('dns') ? 'text-green-300' : 'text-white'} hover:text-green-300 hover:no-underline`}>
                dns
              </a>
            </Link>
          </li>
          <li className='inline-block px-4'>
            <Link href='/proxy'>
              <a className={`${isActive('proxy') ? 'text-green-300' : 'text-white'} hover:text-green-300 hover:no-underline`}>
                proxy
              </a>
            </Link>
          </li>
          <li className='inline-block px-4 hidden'>
            <Link href='/test'>
              <a className={`${isActive('test') ? 'text-green-300' : 'text-white'} hover:text-green-300 hover:no-underline`}>
                test
              </a>
            </Link>
          </li>
          <li className='inline-block px-4'>
            <Link href='/plus'>
              <a className={`${isActive('plus') ? 'text-green-300' : 'text-white'} hover:text-green-300 hover:no-underline`}>
                edgy+
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
