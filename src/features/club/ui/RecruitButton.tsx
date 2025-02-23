'use client';

import { useState } from 'react';

type Option = 'all' | 'recruiting' | 'closed';

interface SelectedOptions {
  all: boolean;
  recruiting: boolean;
  closed: boolean;
}

export default function RecruitButton() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    all: false,
    recruiting: false,
    closed: false,
  });

  const toggleOption = (option: Option): void => {
    setSelectedOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <div className='relative'>
      <button
        className='rounded-lg border border-black p-2 duration-100 hover:scale-105'
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        모집 상황
      </button>
      {isModalOpen && (
        <div className='absolute right-0 top-11 w-40 rounded-lg border border-black bg-white p-2'>
          <div className='mb-2 flex justify-center'>
            <label className='flex items-center'>
              <div className='flex w-6 justify-start'>
                <input
                  type='checkbox'
                  checked={selectedOptions.all}
                  onChange={() => toggleOption('all')}
                />
              </div>
              <span className='ml-2'>전체</span>
            </label>
          </div>
          <div className='mb-2 flex justify-center'>
            <label className='flex items-center'>
              <div className='flex w-6 justify-start'>
                <input
                  type='checkbox'
                  checked={selectedOptions.recruiting}
                  onChange={() => toggleOption('recruiting')}
                />
              </div>
              <span className='ml-2'>모집중</span>
            </label>
          </div>
          <div className='flex justify-center'>
            <label className='flex items-center'>
              <div className='flex w-6 justify-start'>
                <input
                  type='checkbox'
                  checked={selectedOptions.closed}
                  onChange={() => toggleOption('closed')}
                />
              </div>
              <span className='ml-2'>모집마감</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
