import { Club } from '@/src/shared';
import Link from 'next/link';

type ClubHeaderProps = {
  club: Club;
};

export default function ClubHeader({ club }: ClubHeaderProps) {
  return (
    <div className='flex flex-col items-center gap-6 rounded-lg bg-gray-100 p-6 md:flex-row md:items-start'>
      <img
        src='/knu.webp' // API 완성 시 교체 필요
        alt='동아리 로고'
        className='h-24 w-24 rounded-full object-cover'
      />
      <div className='flex-1'>
        <h1 className='text-2xl font-bold text-gray-900'>{club.name}</h1>
        <p className='font-semibold text-blue-600'>{club.category}</p>
        <div className='mt-2 grid grid-cols-2 gap-2 text-sm text-gray-700'>
          <p>
            <span className='font-medium'>모집 여부:</span>{' '}
            {club.isRecruiting ? (
              <span className='font-semibold text-green-600'>모집 중</span>
            ) : (
              <span className='font-semibold text-red-600'>모집 마감</span>
            )}
          </p>
        </div>
      </div>
      <Link
        href='https://docs.google.com/forms/d/e/1FAIpQLSfXHvUwOH1WLTx1aEdCDOvFbl8Gkzy5z549Bo4yxM03TcjGLA/viewform'
        className={`rounded-lg px-4 py-2 text-sm ${
          club.isRecruiting
            ? 'bg-red-500 text-white'
            : 'cursor-not-allowed bg-gray-300 text-gray-600'
        }`}
        onClick={(e) => {
          if (!club.isRecruiting) e.preventDefault();
        }}
      >
        {club.isRecruiting ? '가입 신청' : '모집 마감'}
      </Link>
    </div>
  );
}
