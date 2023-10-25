// import Link from "next/link";
// import {
//   HiOutlineHome,
//   HiOutlineCalendar,
//   HiOutlineHomeModern,
//   HiOutlineUsers,
//   HiOutlineUser,
//   HiOutlineCog6Tooth,
// } from "react-icons/hi2";

// const Sidebar = () => {
//   return (
//     <div className="hidden lg:w-72 lg:fixed lg:flex lg:flex-col lg:inset-y-0 z-40">
//       <div className="flex flex-col grow px-6 pb-4 overflow-y-auto gap-y-5 bg-white border-r border-gray-200">
//         <div className="flex shrink-0 items-center justify-center h-16">
//           <img className="w-auto h-5" src="/next.svg" alt="Your Company" />
//         </div>
//         <nav className="flex flex-1 flex-col">
//           <ul role="list" className="flex flex-col flex-1 gap-y-7">
//             <li>
//               <ul role="list" className="-mx-2 abo">
//                 <li>
//                   <Link
//                     href="/"
//                     className="text-indigo-600 leading-6 font-semibold text-sm p-2 bg-gray-50 rounded-md gap-x-3 flex hover:text-indigo-600 hover:bg-gray-50"
//                   >
//                     <HiOutlineHome className="h-5 w-5 text-gray-400 shrink-0" />
//                     Dashboard
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/bookings"
//                     className="text-gray-700 leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex hover:text-indigo-600 hover:bg-gray-50"
//                   >
//                     <HiOutlineCalendar className="h-5 w-5 text-gray-400 shrink-0" />
//                     Bookings
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/cabins"
//                     className="text-gray-700 leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex hover:text-indigo-600 hover:bg-gray-50"
//                   >
//                     <HiOutlineHomeModern className="h-5 w-5 text-gray-400 shrink-0" />
//                     Cabins
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/users"
//                     className="text-gray-700 leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex hover:text-indigo-600 hover:bg-gray-50"
//                   >
//                     <HiOutlineUsers className="h-5 w-5 text-gray-400 shrink-0" />
//                     Users
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/account"
//                     className="text-gray-700 leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex hover:text-indigo-600 hover:bg-gray-50"
//                   >
//                     <HiOutlineUser className="h-5 w-5 text-gray-400 shrink-0" />
//                     Account
//                   </Link>
//                 </li>
//               </ul>
//             </li>

//             <li className="mt-auto">
//               <Link
//                 href="/settings"
//                 className="text-gray-700 leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex hover:text-indigo-600 hover:bg-gray-50"
//               >
//                 <HiOutlineCog6Tooth className="h-5 w-5 text-gray-400 shrink-0" />
//                 Settings
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import NavItem from "./navItem";

const navItems = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineHome className="h-5 w-5 text-gray-400" />,
  },
  {
    id: 2,
    label: "Bookings",
    path: "/bookings",
    icon: <HiOutlineCalendar className="h-5 w-5 text-gray-400" />,
  },
  {
    id: 3,
    label: "Cabins",
    path: "/cabins",
    icon: <HiOutlineHomeModern className="h-5 w-5 text-gray-400" />,
  },
  {
    id: 4,
    label: "Users",
    path: "/users",
    icon: <HiOutlineUsers className="h-5 w-5 text-gray-400" />,
  },
];

const settingsItem = {
  id: 5,
  label: "settings",
  path: "/settings",
  icon: <HiOutlineCog6Tooth className="h-5 w-5 text-gray-400" />,
};

const Sidebar = () => {
  return (
    <div className="hidden lg:w-72 lg:fixed lg:flex lg:flex-col lg:inset-y-0 z-40">
      <div className="flex flex-col grow px-6 pb-4 overflow-y-auto gap-y-5 bg-white border-r border-gray-200">
        <div className="flex shrink-0 items-center justify-center h-16 hover:bg-gray-100">
          <Link href="/">
            <Image
              src="/next.svg"
              alt="logo the wild oasis"
              height={100}
              width={100}
              className="w-auto h-4"
              priority={true}
            />
          </Link>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-col flex-1 gap-y-7">
            <li>
              <ul role="list" className="-mx-2 abo">
                {navItems.map((navItem) => (
                  <NavItem key={navItem.id} navItem={navItem} />
                ))}
              </ul>
            </li>
            <NavItem navItem={settingsItem} classes="mt-auto" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
