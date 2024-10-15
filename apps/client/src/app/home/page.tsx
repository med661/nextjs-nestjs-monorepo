import React from 'react';
import { Sparkles } from 'lucide-react';

const Content: React.FC = () => {
    return (
        <main className="flex-grow p-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to MyApp</h1>
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Sparkles className="mr-2 text-yellow-500" />
                        Getting Started
                    </h2>
                    <p className="text-gray-600 mb-4">
                        MyApp is designed to make your life easier. Here are some things you can do:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Explore our intuitive dashboard</li>
                        <li>Connect with your team members</li>
                        <li>Track your progress with analytics</li>
                        <li>Customize your settings for a personalized experience</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'].map((feature, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2">{feature}</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Content;