"use client"
import React, { useState, useEffect } from 'react';
import { Search, Filter, Mail, Phone, MapPin, Briefcase, ChevronDown, ChevronUp, Calendar } from 'lucide-react';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    location: string;
    role: string;
    department: string;
    joinDate: string;
    avatar: string;
}

const userData: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 8901', location: 'New York, NY', role: 'Developer', department: 'Engineering', joinDate: '2021-03-15', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 8902', location: 'San Francisco, CA', role: 'Designer', department: 'Design', joinDate: '2020-11-01', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    // Add more user data here
];

const Users: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState(userData);

    const departments = Array.from(new Set(userData.map((user) => user.department)));
    const roles = Array.from(new Set(userData.map((user) => user.role)));

    const applyFilters = () => {
        const filtered = userData.filter((user) => {
            return (
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedDepartment === '' || user.department === selectedDepartment) &&
                (selectedRole === '' || user.role === selectedRole)
            );
        });
        setFilteredUsers(filtered);
    };

    useEffect(() => {
        applyFilters();
    }, [searchTerm, selectedDepartment, selectedRole]);

    return (
        <div className="flex-grow p-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">User Directory</h1>

                <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                        <div className="relative flex-grow mb-4 md:mb-0">
                            <input
                                type="text"
                                placeholder="Search users..."
                                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        </div>
                        <div className="relative">
                            <select
                                className="w-full md:w-auto appearance-none bg-white border rounded-lg pl-3 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                value={selectedDepartment}
                                onChange={(e) => setSelectedDepartment(e.target.value)}
                            >
                                <option value="">All Departments</option>
                                {departments.map((department) => (
                                    <option key={department} value={department}>
                                        {department}
                                    </option>
                                ))}
                            </select>
                            <Filter size={20} className="absolute right-3 top-3.5 text-gray-500 pointer-events-none" />
                        </div>
                    </div>
                    <button
                        className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out"
                        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                    >
                        {showAdvancedFilters ? <ChevronUp size={20} className="mr-1" /> : <ChevronDown size={20} className="mr-1" />}
                        {showAdvancedFilters ? 'Hide Advanced Filters' : 'Show Advanced Filters'}
                    </button>
                    {showAdvancedFilters && (
                        <div className="mt-4">
                            <div className="relative">
                                <select
                                    className="w-full appearance-none bg-white border rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                >
                                    <option value="">All Roles</option>
                                    {roles.map((role) => (
                                        <option key={role} value={role}>
                                            {role}
                                        </option>
                                    ))}
                                </select>
                                <Briefcase size={20} className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Table view for laptop and tablet */}
                <div className="hidden md:block overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Department
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Location
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Join Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full" src={user.avatar} alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap font-semibold">
                                                    {user.name}
                                                </p>
                                                <p className="text-gray-600 whitespace-no-wrap">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{user.role}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{user.department}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{user.location}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {new Date(user.joinDate).toLocaleDateString()}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Card view for mobile */}
                <div className="md:hidden grid grid-cols-1 gap-6">
                    {filteredUsers.map((user) => (
                        <div key={user.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                                        <p className="text-indigo-600 font-medium">{user.role}</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center text-gray-600">
                                        <Mail size={16} className="mr-2" />
                                        <span>{user.email}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Briefcase size={16} className="mr-2" />
                                        <span>{user.department}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <MapPin size={16} className="mr-2" />
                                        <span>{user.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Calendar size={16} className="mr-2" />
                                        <span>Joined: {new Date(user.joinDate).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Users;