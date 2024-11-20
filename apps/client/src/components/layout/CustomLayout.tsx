"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "./NavBar";
import Sidebar from "./sideBar";
import Footer from "./Footer";

interface CustomLayoutProps {
  children: React.ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleAuth = () => setIsAuthenticated(!isAuthenticated);

  const setCurrentPage = (page: string) => {
    router.push(`/${page}`);
  };

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1">
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          setCurrentPage={setCurrentPage}
          currentPage={pathname.slice(1) || "home"}
        />

        <main className="flex-1 overflow-y-auto bg-flow">
          <Navbar
            isAuthenticated={isAuthenticated}
            toggleSidebar={toggleSidebar}
            toggleAuth={toggleAuth}
          />
          {/* <div className="mx-auto bg-white rounded-lg shadow-md p-6 bg-flow"> */}
          {children}
          {/* </div> */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CustomLayout;
