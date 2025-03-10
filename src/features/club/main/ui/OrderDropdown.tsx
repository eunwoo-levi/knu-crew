'use client';

import { useEffect, useRef, useState } from 'react';

export type SortOption = 'default' | 'club' | 'category';

interface OrderDropdownProps {
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
}

export default function OrderDropdown({ sortOption, setSortOption }: OrderDropdownProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const handleSortSelect = (option: SortOption): void => {
    setSortOption(option);
    setIsModalOpen(false);
  };

  const getButtonClass = (option: SortOption): string =>
    option === sortOption
      ? 'rounded-lg p-2 bg-blue-500 text-white'
      : 'rounded-lg p-2 bg-white text-black hover:bg-blue-100';

  return (
    <div className='relative inline-block font-bold'>
      <button
        className='rounded-lg border border-black p-2 duration-100 hover:scale-105'
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        정렬 기준
      </button>
      {isModalOpen && (
        <div
          ref={modalRef}
          className='absolute right-0 mt-2 w-40 rounded-lg bg-white p-2 shadow-md'
        >
          <div className='flex flex-col space-y-2'>
            <button
              className={getButtonClass('default')}
              onClick={() => handleSortSelect('default')}
            >
              전체
            </button>
            <button className={getButtonClass('club')} onClick={() => handleSortSelect('club')}>
              동아리명
            </button>
            <button
              className={getButtonClass('category')}
              onClick={() => handleSortSelect('category')}
            >
              카테고리
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
