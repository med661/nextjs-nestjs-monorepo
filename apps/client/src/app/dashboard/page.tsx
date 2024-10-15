"use client"
import React from 'react';
import { BarChart, Users, BookOpen, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
    const stats = [
        { icon: Users, label: 'Total Users', value: '1,234' },
        { icon: BookOpen, label: 'Courses Completed', value: '56' },
        { icon: Clock, label: 'Avg. Time Spent', value: '2.5 hrs' },
        { icon: BarChart, label: 'Progress Rate', value: '78%' },
    ];

    return (
        <div className="flex-grow p-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                    <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
                                </div>
                                <div className="bg-indigo-100 p-3 rounded-full">
                                    <stat.icon className="w-6 h-6 text-indigo-600" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                        <ul className="space-y-4">
                            {[
                                'Completed "Introduction to React" course',
                                'Started "Advanced Node.js" course',
                                'Achieved 80% in "UI/UX Design Principles" quiz',
                                'Joined "Data Structures and Algorithms" study group',
                            ].map((activity, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700">{activity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
                        <ul className="space-y-4">
                            {[
                                { course: 'Advanced Node.js', deadline: '2023-06-15' },
                                { course: 'Machine Learning Basics', deadline: '2023-06-20' },
                                { course: 'Responsive Web Design', deadline: '2023-06-25' },
                                { course: 'Python for Data Analysis', deadline: '2023-06-30' },
                            ].map((item, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span className="text-gray-700">{item.course}</span>
                                    <span className="text-sm text-gray-500">{item.deadline}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;