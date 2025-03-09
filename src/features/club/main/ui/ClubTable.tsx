import { Club } from '@/src/shared';
import Link from 'next/link';
import { clubCategoryMapping, textColorsByCategory } from '../../shared/model/data';

export default function ClubTable({ club }: { club: Club }) {
  return (
    <Link
      href={`/club/${club.id}`}
      className={`flex w-11/12 items-center justify-between rounded-lg border-[3px] px-6 pb-4 pt-6 duration-200 hover:scale-105 ${club.isRecruiting ? 'border-red-400 hover:border-red-500' : 'border-neutral-300 hover:border-neutral-400'} flex-col`}
    >
      <div className='mb-3 flex flex-col items-start justify-center gap-4 rounded-md p-2 text-lg font-bold'>
        <span className='text-[25px] font-extrabold'>{club.name}</span>
        <span className={` ${textColorsByCategory[club.category] || 'text-neutral-500'} mx-auto`}>
          {clubCategoryMapping[club.category]}
        </span>
      </div>
      <div className='flex w-full items-center justify-center whitespace-nowrap text-center text-lg font-bold text-white'>
        {club.isRecruiting ? (
          <div className='w-full rounded-md bg-red-500 p-2'>모집 중</div>
        ) : (
          <div className='w-full rounded-md bg-neutral-100 p-2 text-neutral-500'>모집 마감</div>
        )}
      </div>
    </Link>
  );
}
