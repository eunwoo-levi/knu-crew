import Link from 'next/link';
import { linkList } from '../model/data';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='fixed left-0 top-0 z-50 flex h-[70px] w-full items-center justify-evenly bg-white shadow-md'>
      <div className='flex justify-start'>
        <Link href='/' className='hover:scale-1107 duration-200'>
          <h1 className='text-3xl font-bold text-red-500'>KREW</h1>
        </Link>
      </div>
      <div className='flex gap-10'>
        {linkList.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className='text-lg font-semibold duration-200 hover:scale-105'
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div>
        <Image src='/knu.webp' alt='KNU logo' width={70} height={70} />
      </div>
    </nav>
  );
}
