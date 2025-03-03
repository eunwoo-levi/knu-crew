'use client';

import { Club } from '@/src/shared';
import { Fragment, useState } from 'react';
import { clubCategoryMapping } from '../../shared/model/data';
import { useClubListsQuery } from '../hooks/useClubListsQuery';
import ClubTable from './ClubTable';
import OrderDropdown, { SortOption } from './OrderDropdown';
import RecruitDropdown from './RecruitDropdown';
import SearchBar from './SearchBar';

export default function ClubDashBoard() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedRecruit, setSelectedRecruit] = useState<boolean | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const { data: clubList = [], isLoading, isError, error } = useClubListsQuery();

  const filteredClubs = clubList.filter((club: Club) => {
    const matchedSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchedCategory =
      selectedCategory === '전체' ? true : clubCategoryMapping[club.category] === selectedCategory;
    const matchedRecruit = selectedRecruit === null ? true : club.isRecruiting === selectedRecruit;

    return matchedSearch && matchedCategory && matchedRecruit;
  });

  const sortedClubs = filteredClubs.sort((a, b) => {
    if (sortOption === 'club') {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === 'category') {
      return clubCategoryMapping[a.category].localeCompare(clubCategoryMapping[b.category]);
    }
    return 0;
  });

  if (isLoading) {
    return <div className='mt-10 text-center'>동아리 목록을 불러오는 중입니다...</div>;
  }

  if (isError) {
    return (
      <div className='mt-10 text-center text-red-500'>
        {error instanceof Error ? error.message : '데이터 로딩 중 오류가 발생했습니다.'}
      </div>
    );
  }

  return (
    <div className='flex w-full max-w-7xl flex-col items-center gap-8'>
      <div className='flex w-full items-center justify-center'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className='mt-6 flex w-full items-center justify-between'>
        <span className='font-semibold'>{`총 ${clubList.length}개 동아리`}</span>
        <div className='flex space-x-6 font-semibold'>
          <RecruitDropdown
            selectedRecruit={selectedRecruit}
            setSelectedRecruit={setSelectedRecruit}
          />
          <OrderDropdown sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </div>
      <div className='h-18 scrollbar-hidden flex w-full items-center justify-evenly overflow-x-auto whitespace-nowrap rounded-xl bg-neutral-50 p-2 font-semibold text-neutral-500 hover:scrollbar-thin'>
        {Object.values(clubCategoryMapping).map((category, idx) => (
          <Fragment key={idx}>
            <button
              className={`${selectedCategory === category ? 'bg-blue-100 text-blue-500' : ''} rounded-lg px-4 py-2 duration-100 hover:scale-105`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
            {idx !== Object.keys(clubCategoryMapping).length - 1 && (
              <div className='text-neutral-400'>|</div>
            )}
          </Fragment>
        ))}
      </div>
      <main className='grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {sortedClubs.map((club, idx) => (
          <ClubTable key={idx} club={club} />
        ))}
      </main>
    </div>
  );
}
