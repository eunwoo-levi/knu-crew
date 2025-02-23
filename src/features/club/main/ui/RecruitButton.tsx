'use client';

import { useEffect, useRef, useState } from 'react';

interface RecruitButtonProps {
  selectedRecruit: string;
  setSelectedRecruit: (value: string) => void;
}

export default function RecruitButton({ selectedRecruit, setSelectedRecruit }: RecruitButtonProps) {
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

  const options: string[] = ['전체', '모집중', '마감모집'];

  return (
    <div className='relative'>
      <button
        className='rounded-lg border border-black p-2 duration-100 hover:scale-105'
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        모집 상황
      </button>
      {isModalOpen && (
        <div
          ref={modalRef}
          className='absolute right-0 top-12 w-40 rounded-lg bg-white p-2 shadow-md'
        >
          {options.map((option) => (
            <div key={option} className='mb-2 flex justify-center'>
              <label className='flex w-full cursor-pointer items-center rounded-lg p-2 hover:bg-gray-100'>
                <input
                  type='radio'
                  name='recruit'
                  value={option}
                  checked={selectedRecruit === option}
                  onChange={() => {
                    setSelectedRecruit(option);
                    setIsModalOpen(false);
                  }}
                />
                <span className='ml-2'>{option}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
