import React from 'react';
import SearchBar from './SearchBar';

export default function ClubDashBoard() {
  return (
    <div className='flex w-full flex-col items-center gap-8'>
      <div className='flex w-full items-center justify-center'>
        <SearchBar />
      </div>
      <div className='flex w-full justify-between'>
        <span className='font-semibold'>총 30개 동아리</span>
        <div className='space-x-6 font-semibold'>
          <button className='rounded-lg border border-black p-2 duration-200 hover:scale-105'>
            모집 상황
          </button>
          <button className='rounded-lg border border-black p-2 duration-200 hover:scale-105'>
            정렬
          </button>
        </div>
      </div>
      <div>카테고리</div>
      <div>동아리 리스트</div>
    </div>
  );
}
