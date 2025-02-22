import Link from 'next/link';

interface ClubTableProps {
  club: {
    id: number;
    name: string;
    category: string;
    recruit: boolean;
  };
}

export default function ClubTable({ club }: ClubTableProps) {
  return (
    <Link
      href={`/club/${club.id}`}
      className='w-10/11 flex justify-between rounded-lg border px-8 py-5 duration-200 hover:scale-105'
    >
      <div className='flex flex-col items-start justify-center gap-2'>
        <span className='text-lg font-bold'>{club.name}</span>
        <span>{club.category}</span>
      </div>
      <div className='flex items-center justify-center font-semibold'>
        {club.recruit ? (
          <div className='rounded-md bg-green-100 p-2 text-green-600'>모집중</div>
        ) : (
          <div className='rounded-md bg-neutral-100 p-2 text-neutral-500'>모집 완료</div>
        )}
      </div>
    </Link>
  );
}
