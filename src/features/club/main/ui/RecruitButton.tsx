'use client';

import { useState, useRef, useEffect } from 'react';

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

  const modalRef = useRef<HTMLDivElement>(null);

  const toggleOption = (option: Option): void => {
    setSelectedOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

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

  const options: { key: Option; label: string }[] = [
    { key: 'all', label: '전체' },
    { key: 'recruiting', label: '모집중' },
    { key: 'closed', label: '모집마감' },
  ];

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
          {options.map(({ key, label }) => (
            <div key={key} className='mb-2 flex justify-center'>
              <label className='flex w-full items-center rounded-lg p-2 hover:bg-gray-100'>
                <div className='flex w-6 justify-start'>
                  <input
                    type='checkbox'
                    checked={selectedOptions[key]}
                    onChange={() => toggleOption(key)}
                  />
                </div>
                <span className='ml-2'>{label}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
