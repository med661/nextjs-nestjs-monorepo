"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  User,
  Bell,
  LogOut,
  Languages,
  Lightbulb,
  LightbulbIcon,
  Search,
} from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  isAuthenticated?: boolean;
  toggleSidebar?: () => void;
  toggleAuth?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isAuthenticated = true,
  toggleSidebar = () => {},
  toggleAuth = () => {},
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="max-md:bg-[#0081C9] max-md:m-0 max-md:w-full max-md:rounded-none max-md:    bg-[#fff] text-[#4B4B4E] rounded-[10px] mt-[19px] h-[74px] shadow-custom2 w-[95%] mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[74px]">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-[#9FDDFF] hover:text-white hover:bg-[#0081C9] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M10.291 14.2085H37.7077"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M10.291 24H29.8744"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M10.291 33.7915H22.041"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <Link
              href="/"
              className="flex-shrink-0 flex items-center ml-4 md:ml-0"
            >
              <span className="text-2xl font-bold max-md:hidden">
                <Search size={24} />
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-[#4B4B4E] max-md:text-white  max-md:hover:bg-transparent hover:bg-[#E1F1FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0081C9] focus:ring-white">
              <LightbulbIcon size={20} />
            </button>
            <button className="p-2 rounded-full text-[#4B4B4E] max-md:text-white  max-md:hover:bg-transparent hover:bg-[#E1F1FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0081C9] focus:ring-white">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full text-[#4B4B4E] max-md:text-white max-md:hover:bg-transparent hover:bg-[#E1F1FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0081C9] focus:ring-white">
              <Languages size={20} />
            </button>
            <div className="ml-3 relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="max-w-xs bg-[#0081C9] rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0081C9] focus:ring-white"
              >
                {isAuthenticated ? (
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                  />
                ) : (
                  <User
                    size={26}
                    className="h-9 w-9 rounded-full p-1 bg-[#0081C9] text-white"
                  />
                )}
              </button>
              {isMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      toggleAuth();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {isAuthenticated ? (
                      <span className="flex items-center">
                        <LogOut size={16} className="mr-2" />
                        Sign out
                      </span>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
