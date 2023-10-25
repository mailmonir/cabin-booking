// "use client";

// // import { useState } from "react";
// import Link from "next/link";
// import { HiOutlineChevronDown } from "react-icons/hi2";

// const ProfileMenu = () => {
//   return (
//     // <div className="relative" data-headlessui-state="" ref={ref}>
//     <div className="relative" data-headlessui-state="">
//       <button
//         className="flex items-center -mx-1.5 p-1.5"
//         id="headlessui-menu-button-1"
//         type="button"
//         aria-haspopup="menu"
//         aria-expanded="false"
//         data-headlessui-state=""
//         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//       >
//         <span className="sr-only">Open user menu</span>
//         <img
//           className="w-8 h-8 rounded-full"
//           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//           alt=""
//         />
//         <span className="hidden lg:flex lg:items-center">
//           <span
//             className="ml-4 text-sm font-semibold leading-6 text-gray-900"
//             aria-hidden="true"
//           >
//             Tom Cook
//           </span>
//           <HiOutlineChevronDown className="text-gray-400 h-4 w-4 ml-2" />
//         </span>
//       </button>
//       <div
//         className={`bg-white border w-32 border-gray-200 mt-1 py-2 rounded-md absolute right-0 shadow-md z-10 origin-top-right transition-all ring-0`}
//         // className={`bg-white border w-32 border-gray-200 mt-1 py-2 rounded-md absolute right-0 shadow-md z-10 origin-top-right transition-all ring-0 ${
//         //   !isDropdownOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
//         // }`}
//         aria-labelledby="headlessui-menu-button-1"
//         id="headlessui-menu-items-15"
//         role="menu"
//         tabIndex={0}
//         data-headlessui-state="open"
//       >
//         <Link
//           href="/profile"
//           className="block text-sm px-3 py-1 text-gray-900 leading-6 hover:bg-gray-100"
//           id="headlessui-menu-item-16"
//           role="menuitem"
//           tabIndex={-1}
//           data-headlessui-state=""
//         >
//           Your profile
//         </Link>
//         <button
//           href="#"
//           className="block text-sm px-3 py-1 text-gray-900 leading-6 hover:bg-gray-100"
//           id="headlessui-menu-item-17"
//           role="menuitem"
//           tabIndex={-1}
//           data-headlessui-state=""
//         >
//           Sign out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileMenu;

"use client";

import { useState, useEffect, useContext } from "react";
import Dropdown from "./dropdown";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  HiOutlineChevronDown,
  HiOutlineUser,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
// import { GlobalContext } from "@/app/contexts/globalContext";

const ProfileMenu = () => {
  const router = useRouter();
  //   const supabase = createClientComponentClient();
  const [user, setUser] = useState();
  //   const { globalState } = useContext(GlobalContext);

  //   useEffect(() => {
  //     const getUser = async () => {
  //       const { data } = await supabase.auth.getSession();
  //       setUser(data?.session?.user);
  //     };
  //     getUser();
  //   }, [supabase]);

  async function handleSignOut() {
    //     const { error } = await supabase.auth.signOut();
    //     if (error) {
    //       console.error(error);
    //     }
    //     router.replace("/");
  }

  return (
    <Dropdown>
      <Dropdown.Toggler id="navbarProfiler">
        <span className="sr-only">Open user menu</span>
        {user?.user_metadata?.avatar_url ? (
          <Image
            src={
              globalState.avatar_url
                ? globalState.avatar_url
                : user?.user_metadata?.avatar_url
            }
            alt="profile picture"
            width={100}
            height={100}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <svg
            className="h-12 w-12 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        )}

        <span className="hidden lg:flex lg:items-center">
          <span
            className="ml-4 text-sm font-semibold leading-6 text-gray-900"
            aria-hidden="true"
          >
            {/* {user?.user_metadata?.full_name} */}Tom
          </span>
          <HiOutlineChevronDown className="text-gray-400 h-4 w-4 ml-2" />
        </span>
      </Dropdown.Toggler>
      <Dropdown.List id="navbarProfiler">
        <Dropdown.Button onClick={() => router.push("/profile")}>
          <HiOutlineUser className="w-5 h-5 text-gray-400 mr-2" />
          Profile
        </Dropdown.Button>
        <Dropdown.Button onClick={handleSignOut}>
          <HiOutlineArrowRightOnRectangle className="w-5 h-5 text-gray-400 mr-2" />
          Sign out
        </Dropdown.Button>
      </Dropdown.List>
    </Dropdown>
  );
};

export default ProfileMenu;
