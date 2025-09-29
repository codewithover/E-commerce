import { Search as SearchIcon } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className='hidden sm:flex item-center gap-2 rounded-md ring-1 ring-gray-200 py-2 px-2 shadow-mdBar'>
      <SearchIcon className='w-4 h-4 text-gray-500'/>
      <input id="search" placeholder='Search...' className='test-sm outline-0' />
    </div>
  );
};

export default SearchBar;
