import { Club } from '@/src/shared';
import Link from 'next/link';
import { clubCategoryMapping, textColorsByCategory } from '../../shared/model/data';

export default function ClubTable({ club }: { club: Club }) {
  return (
    <Link
      href={`/club/${club.id}`}
      className='flex w-11/12 justify-between rounded-lg border px-6 py-5 duration-200 hover:scale-105'
    >
      <div className='flex flex-col items-start justify-center gap-2'>
        <span className='text-lg font-bold'>{club.name}</span>
        <span className={` ${textColorsByCategory[club.category] || 'text-neutral-500'}`}>
          {clubCategoryMapping[club.category]}
        </span>
      </div>
      <div className='ml-4 flex items-center justify-center font-semibold'>
        {club.isRecruiting ? (
          <div className='rounded-md bg-green-100 p-2 text-green-600'>모집중</div>
        ) : (
          <div className='whitespace-nowrap rounded-md bg-neutral-100 p-2 text-neutral-500'>
            모집 완료
          </div>
        )}
      </div>
    </Link>
  );
}
