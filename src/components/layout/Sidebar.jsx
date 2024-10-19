"use client";

import { FaDashcube, FaUser, FaCalendarAlt } from "react-icons/fa";

import SidebarLogo from "../Sidebar/SidebarLogo";
import SidebarItem from "../Sidebar/SidebarItem";
import useLocalStorage from "@/hooks/useLocalStorage";
// import dynamic from "next/dynamic";

// const SidebarItem = dynamic(() => import("../Sidebar/SidebarItem"), {
//   ssr: false,
// });

const sizeIcon = 20;
const menuGroups = [
  {
    name: "Menu",
    items: [
      {
        icon: <FaDashcube size={sizeIcon} />,
        label: "Dashboard",
        route: "/admin/dashboard",
        // children: [
        //   { label: "dashboard_1", route: "/admin/dashboard/dashboard_1" },
        //   { label: "dashboard_2", route: "/admin/dashboard/dashboard_2" },

        // ],
      },
    ],
  },
  {
    name: "Other",
    items: [
      {
        icon: <FaUser size={sizeIcon} />,
        label: "Profile",
        route: "/admin/profile",
      },
    ],
  },
  
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashbard");

  return (
    <>
      <aside
        className={`fixed flex flex-col min-h-full group bg-[#1c2434] text-white transition-all overflow-hidden shadow-sidebar ease-linear duration-300 z-[1038] ${
          sidebarOpen ? "w-64" : "w-0 md:w-20 hover:w-64"
        }`}
      >
        {/* LOGO */}
        <SidebarLogo sidebarOpen={sidebarOpen} />

        {/* MENU */}
        <div className="hover:aside-scrollbars-[gray] hover:overflow-y-auto h-screen">
          {/* <nav className="mt-8 pl-4 pr-3"> */}
          <nav className="mt-8 pl-3 pr-4">
            {menuGroups.map((group, key) => (
              <div key={key} className="mb-8">
                <h3 className={`mb-2 text-sm font-semibold text-[#8A99AF]`}>
                  {group.name}
                </h3>

                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item, index) => (
                    <SidebarItem
                      key={index}
                      item={item}
                      sidebarOpen={sidebarOpen}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
      {sidebarOpen && (
        <div
          className="fixed flex max-md:right-0 max-md:top-0 max-md:left-0 max-md:bottom-0 bg-black/10 max-md:z-[1034]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        ></div>
      )}
    </>
  );
}
