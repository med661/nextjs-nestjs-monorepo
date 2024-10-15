"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Menu, User, Bell, LogOut } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
    isAuthenticated?: boolean;
    toggleSidebar?: () => void;
    toggleAuth?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
    isAuthenticated = true,
    toggleSidebar = () => { },
    toggleAuth = () => { }
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-indigo-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <button onClick={toggleSidebar} className="p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden">
                            <Menu size={24} />
                        </button>
                        <Link href="/" className="flex-shrink-0 flex items-center ml-4 md:ml-0">
                            <span className="text-2xl font-bold">MyApp</span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <button className="p-2 rounded-full text-indigo-200 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                            <Bell size={20} />
                        </button>
                        <div className="ml-3 relative" ref={menuRef}>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                            >
                                {isAuthenticated ? (
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="User avatar"
                                    />
                                ) : (
                                    <User size={20} className="h-8 w-8 rounded-full p-1 bg-indigo-500 text-white" />
                                )}
                            </button>
                            {isMenuOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                                    <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
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
                                            'Sign in'
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