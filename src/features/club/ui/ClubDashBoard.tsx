'use client';

import { Club } from '@/src/shared';
import { Fragment, useState } from 'react';
import { clubCategory, clubList } from '../model/data';
import ClubTable from './ClubTable';
import OrderButton from './OrderButton';
import RecruitButton from './RecruitButton';
import SearchBar from './SearchBar';

export default function ClubDashBoard() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedRecruit, setSelectedRecruit] = useState<string>('전체');

  const filteredClubs = clubList.filter((club: Club) => {
    const matchedsearch = club.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchedCategory = selectedCategory === '전체' ? true : club.category === selectedCategory;
    const matchedRecruit = selectedRecruit === '전체' ? true : club.recruit === selectedRecruit;

    return matchedsearch && matchedCategory && matchedRecruit;
  });

  return (
    <div className='flex w-full max-w-7xl flex-col items-center gap-8'>
      <div className='flex w-full items-center justify-center'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className='mt-6 flex w-full items-center justify-between'>
        <span className='font-semibold'>{`총 ${clubList.length}개 동아리`}</span>
        <div className='flex space-x-6 font-semibold'>
          <RecruitButton />
          <OrderButton />
        </div>
      </div>
      <div className='h-18 scrollbar-hidden hover:scrollbar-thin flex w-full items-center justify-evenly overflow-x-auto whitespace-nowrap rounded-xl bg-neutral-50 p-2 font-semibold text-neutral-500'>
        {clubCategory.map((category, idx) => (
          <Fragment key={idx}>
            <button
              className={`${selectedCategory === category ? 'bg-blue-100 text-blue-500' : ''} rounded-lg px-4 py-2 duration-100 hover:scale-105`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
            {idx !== clubCategory.length - 1 && <div className='text-neutral-400'>|</div>}
          </Fragment>
        ))}
      </div>
      <main className='grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {filteredClubs.map((club, idx) => (
          <ClubTable key={idx} club={club} />
        ))}
      </main>
    </div>
  );
}
