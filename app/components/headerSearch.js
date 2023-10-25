import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const HeaderSearch = () => {
  return (
    <form className="flex flex-1 relative" action="#" method="GET">
      <label htmlFor="search-field" className="sr-only">
        Search
      </label>
      <HiOutlineMagnifyingGlass className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" />
      <input
        id="search-field"
        className="block w-full h-full border-0 py-0 pl-8 pr-0 text-gray-900 sm:text-sm focus:ring-0 focus:outline-none"
        placeholder="Search..."
        type="search"
        name="search"
        autoComplete="off"
      />
    </form>
  );
};

export default HeaderSearch;
