import React from 'react';
import { FaBook, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

const footerNavigation = {
    learning: [
        { name: 'Courses', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Workshops', href: '#' },
        { name: 'Learning Paths', href: '#' },
    ],
    support: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Community Forums', href: '#' },
    ],
    company: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Press', href: '#' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: FaFacebookF,
        },
        {
            name: 'Twitter',
            href: '#',
            icon: FaTwitter,
        },
        {
            name: 'GitHub',
            href: '#',
            icon: FaGithub,
        },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-indigo-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center">
                            <FaBook className="h-10 w-10 text-indigo-300" />
                            <span className="ml-3 text-2xl font-bold text-white">LearnHub</span>
                        </div>
                        <p className="text-base text-indigo-200">
                            Empowering learners worldwide with accessible, high-quality education.
                        </p>
                        <div className="flex space-x-6">
                            {footerNavigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-indigo-300 hover:text-indigo-100">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-white">Learning</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.learning.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-indigo-200 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-white">Support</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-indigo-200 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-white">Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-indigo-200 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-white">Legal</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-indigo-200 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-indigo-700 pt-8">
                    <p className="text-base text-indigo-300 xl:text-center">
                        &copy; 2024 LearnHub, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}