import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='relative mt-12 h-60 w-2/3'>
        <Image src='/banner.webp' alt='banner' fill className='rounded-2xl' />
      </div>
      <div className='mt-16 w-full'></div>
    </div>
  );
}
