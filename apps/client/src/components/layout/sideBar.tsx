"use client";
import React from "react";
import Link from "next/link";
import {
  X,
  User,
  Home,
  Settings,
  HelpCircle,
  Users,
  BarChart,
  BookOpen,
  LayoutDashboard,
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  toggleSidebar?: () => void;
  setCurrentPage?: (page: string) => void;
  currentPage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen = false,
  toggleSidebar = () => {},
  setCurrentPage = () => {},
  currentPage = "home",
}) => {
  const menuItems = [
    { icon: Home, label: "Home", page: "" },
    { icon: LayoutDashboard, label: "Dashboard", page: "dashboard" },
    { icon: BookOpen, label: "Training", page: "training" },
    { icon: Users, label: "users", page: "users" },
    { icon: User, label: "Profile", page: "profile" },
    { icon: BarChart, label: "Analytics", page: "analytics" },
    { icon: Settings, label: "Settings", page: "settings" },
    { icon: HelpCircle, label: "Help", page: "help" },
  ];

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white transition duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 flex flex-col pb-16`}
      >
        <div
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 z-20 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} md:hidden`}
          onClick={toggleSidebar}
        ></div>
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 bg-white transition duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 flex flex-col`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex">
              <img src="/logo.svg" alt="MyApp" className="h-8 mr-2" />
              <h2 className="text-2xl font-semibold text-[#0081C9]">
                Formationnet
              </h2>
            </div>
            <button
              onClick={toggleSidebar}
              className="md:hidden text-gray-500 hover:text-[#0081C9] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-2 px-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.page}`}
                    className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${currentPage === item.page ? "bg-[#E1F1FF] text-[#0081C9]" : "text-gray-600 hover:bg-gray-100 hover:text-[#0081C9]"}`}
                    onClick={() => {
                      setCurrentPage(item.page);
                      if (window.innerWidth < 768) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <item.icon size={20} className="mr-3" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
