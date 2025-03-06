import { ClubDashBoard } from '@/src/features/club/main';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='banner-fade-in relative mt-6 h-60 w-full max-w-7xl px-4 md:w-3/4'>
        <Image src='/images/banner.webp' alt='banner' fill className='rounded-2xl object-cover' />
      </div>

      <div className='mb-10 mt-16 w-full max-w-7xl px-4 md:w-3/4'>
        <ClubDashBoard />
      </div>
    </div>
  );
}
