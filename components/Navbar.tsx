import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants/index';

export default function Navbar() {
  return (
    <nav className='flex w-full items-center justify-between px-5 md:px-10 bg-lightYellowColor py-3'>
      <Link href='/'>
        <Image width={40} height={40} src='/logo.png' alt='logo' />
      </Link>

      {/* Desktop screens for navbar links */}
      <ul className='hidden flex-1 items-center justify-center md:flex'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className='cursor-pointer text-lg text-black font-bold mr-10'
          >
            <Link href={`${nav.page}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <button className='px-10 py-3 cursor-pointer rounded-full bg-deepOrangeColor text-white'>
        Get Started
      </button>
    </nav>
  );
}
