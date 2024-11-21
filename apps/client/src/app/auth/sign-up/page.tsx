'use client';

import { useState } from 'react';
import { Mail, Lock, User, Sparkles, X } from 'lucide-react';
import Link from 'next/link';

export default function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showTerms, setShowTerms] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Full Name:', fullName, 'Email:', email, 'Password:', password);
    };

    const TermsModal = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl mx-4 p-6 max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Terms and Conditions</h3>
                    <button
                        onClick={() => setShowTerms(false)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                    >
                        <X className="text-gray-500" />
                    </button>
                </div>
                <div className="prose prose-sm max-w-none">
                    <h4 className="text-lg font-semibold mb-2">1. Introduction</h4>
                    <p className="mb-4">
                        These Terms and Conditions govern your use of our service and website. By accessing or using our service, you agree to be bound by these terms.
                    </p>

                    <h4 className="text-lg font-semibold mb-2">2. User Accounts</h4>
                    <p className="mb-4">
                        When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for any activities under your account.
                    </p>

                    <h4 className="text-lg font-semibold mb-2">3. Privacy Policy</h4>
                    <p className="mb-4">
                        Your use of our service is also governed by our Privacy Policy. Please review our Privacy Policy, which explains how we collect, use, and share your information.
                    </p>

                    <h4 className="text-lg font-semibold mb-2">4. User Responsibilities</h4>
                    <p className="mb-4">
                        You agree not to:
                        <ul className="list-disc pl-6 mt-2">
                            <li>Use the service for any illegal purposes</li>
                            <li>Violate any applicable laws or regulations</li>
                            <li>Impersonate any person or entity</li>
                            <li>Interfere with the security of the service</li>
                        </ul>
                    </p>

                    <h4 className="text-lg font-semibold mb-2">5. Intellectual Property</h4>
                    <p className="mb-4">
                        The service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>

                    <h4 className="text-lg font-semibold mb-2">6. Termination</h4>
                    <p className="mb-4">
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms.
                    </p>

                    <h4 className="text-lg font-semibold mb-2">7. Changes to Terms</h4>
                    <p className="mb-4">
                        We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
                    </p>
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={() => setShowTerms(false)}
                        className="px-4 py-2 bg-[#0081C9] text-white rounded-lg hover:bg-[#006BA8] transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <main className="flex-grow min-h-screen p-6 bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                            <Sparkles className="mr-2 text-[#0081C9]" />
                            Create Account
                        </h2>
                        <p className="text-gray-600">Join us today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative">
                                <User className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0081C9] text-gray-800 transition-all duration-200"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <Mail className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0081C9] text-gray-800 transition-all duration-200"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0081C9] text-gray-800 transition-all duration-200"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0081C9] text-gray-800 transition-all duration-200"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-[#0081C9] focus:ring-[#0081C9] border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-800">
                                I agree to the{' '}
                                <button
                                    type="button"
                                    onClick={() => setShowTerms(true)}
                                    className="text-[#0081C9] hover:text-[#006BA8] font-medium"
                                >
                                    Terms and Conditions
                                </button>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-lg shadow-lg text-sm font-medium text-white bg-[#0081C9] hover:bg-[#006BA8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0081C9] transition-all duration-200"
                        >
                            Sign up
                        </button>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link href="/auth/sign-in" className="font-medium text-[#0081C9] hover:text-[#006BA8]">
                                    Sign in
                                </Link>
                            </p>
                        </div>

                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-600">Or sign up with</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center py-2 px-4 rounded-lg shadow-lg text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="20"
                                height="20"
                                className="mr-2"
                            >
                                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                                <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                            </svg>
                            Sign up with Google
                        </button>
                    </form>
                </div>
            </div>
            {showTerms && <TermsModal />}
        </main>
    );
}