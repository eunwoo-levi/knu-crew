import { FaSearch } from 'react-icons/fa';

interface searchBarProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: searchBarProps) {
  return (
    <div className='flex w-5/6 items-center justify-between rounded-lg border border-sky-400 bg-neutral-50 px-2 py-1'>
      <input
        type='text'
        placeholder='동아리 이름'
        className='w-full rounded-lg bg-transparent p-3 text-lg font-semibold outline-none lg:text-xl'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='pr-4 hover:text-neutral-600'>
        <FaSearch size={25} color='gray' />
      </button>
    </div>
  );
}
