'use client';

import React, { Fragment, useState } from 'react';
import SearchBar from './SearchBar';
import { clubCategory, clubList } from '../model/data';
import ClubTable from './ClubTable';
import { Club } from '@/src/shared/type/type';

export default function ClubDashBoard() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const filteredClubs = clubList.filter((club: Club) =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className='flex w-full flex-col items-center gap-8'>
      <div className='flex w-full items-center justify-center'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className='mt-6 flex w-full justify-between'>
        <span className='font-semibold'>총 30개 동아리</span>
        <div className='space-x-6 font-semibold'>
          <button className='rounded-lg border border-black p-2 duration-100 hover:scale-105'>
            모집 상황
          </button>
          <button className='rounded-lg border border-black p-2 duration-100 hover:scale-105'>
            정렬
          </button>
        </div>
      </div>
      <div className='flex w-full items-center justify-evenly rounded-xl bg-neutral-50 p-2 font-semibold text-neutral-500'>
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
      <main className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {filteredClubs.map((club, idx) => (
          <ClubTable key={idx} club={club} />
        ))}
      </main>
    </div>
  );
}
