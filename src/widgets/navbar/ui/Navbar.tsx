'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { linkList } from '../model/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      if (isOpen) {
        document.addEventListener('click', handleClickOutside);
      }

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <nav className='sticky left-0 top-0 z-50 flex h-[70px] w-full bg-white shadow-md'>
      <div className='mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-20'>
        <div className='font-Logo flex items-center gap-2 duration-200 hover:scale-110'>
          <Image
            src='/images/knu-logo.png'
            alt='KNU logo'
            width={50}
            height={50}
            className='md:h-[60px] md:w-[60px] lg:h-[45px] lg:w-[45px]'
          />
          <Link href='/'>
            <h1 className='font-Logo text-2xl font-bold text-red-500 md:text-3xl'>KNU CREW</h1>
          </Link>
        </div>

        <div className='hidden flex-1 justify-center gap-20 lg:flex'>
          {linkList.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className='text-xl font-bold duration-200 hover:scale-110'
            >
              {link.title}
            </Link>
          ))}
        </div>

        <button
          className='rounded-md text-3xl hover:bg-neutral-300 focus:outline-none lg:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {isOpen && (
          <div ref={menuRef} className='absolute left-0 top-16 w-full bg-white shadow-md lg:hidden'>
            <ul className='flex flex-col items-center space-y-4 py-4'>
              {linkList.map((link, idx) => (
                <li key={idx} className='flex w-full flex-col items-center'>
                  <Link
                    href={link.href}
                    className='text-lg font-semibold duration-200 hover:scale-105'
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                  {idx !== linkList.length - 1 && (
                    <div className='my-3 h-[1px] w-4/5 bg-neutral-200' />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
