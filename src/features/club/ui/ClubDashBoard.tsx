import React from 'react';
import SearchBar from './SearchBar';
import { clubCategory, clubList } from '../model/data';
import ClubTable from './ClubTable';

export default function ClubDashBoard() {
  return (
    <div className='flex w-full flex-col items-center gap-8'>
      <div className='flex w-full items-center justify-center'>
        <SearchBar />
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
          <button key={idx} className='rounded-lg px-4 py-2 duration-100 hover:scale-105'>
            {category}
          </button>
        ))}
      </div>
      <main className='grid w-full grid-cols-3 gap-8'>
        {clubList.map((club, idx) => (
          <ClubTable key={idx} club={club} />
        ))}
      </main>
    </div>
  );
}
