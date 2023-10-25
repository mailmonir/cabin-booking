import {
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineChevronDown,
  HiOutlineBars3,
} from "react-icons/hi2";

// import { useOutSideClick } from "../hooks/useOutSideClick";
import ProfileMenu from "./profileMenu";
import HeaderSearch from "./headerSearch";
import IconButton from "./iconButton";

const Header = ({ children }) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const ref = useOutSideClick(() => setIsDropdownOpen(false));

  return (
    <div className="lg:pl-72">
      <div className="sticky top-0 z-40 flex shrink-0 h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 ring-0 sm:px-6 lg:px-8">
        <IconButton srText="Open sidebar" classes="text-gray-700 lg:hidden">
          <HiOutlineBars3 className="w-6 h-6" />
        </IconButton>
        <div className="bg-gray-200 w-px h-6 lg:hidden" aria-hidden="true" />
        <div className="self-stretch flex flex-1 gap-x-4 lg:gap-x-6">
          <HeaderSearch />
          <div className="flex items-center gap-x-6">
            <IconButton srText="View notifications">
              <HiOutlineBell className="h-6 w-6" />
            </IconButton>
            <div
              className="bg-gray-200 w-px h-6 hidden lg:block"
              aria-hidden="true"
            />
            <ProfileMenu />
          </div>
        </div>
      </div>
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default Header;
