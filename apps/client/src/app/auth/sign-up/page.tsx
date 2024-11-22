'use client';

import { useState } from 'react';
import { Mail, Lock, User, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '@/graphql/mutations';

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showTerms, setShowTerms] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await registerUser({
                variables: {
                    registerInput: {
                        email,
                        firstName,
                        lastName,
                        password,
                    },
                },
            });

            setSuccessMessage(response.data.register);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (err) {
            console.error(err);
            setSuccessMessage('');
        }
    };

    const TermsModal = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl mx-4 p-6 max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Terms and Conditions</h3>
                    <button onClick={() => setShowTerms(false)} className="p-1 hover:bg-gray-100 rounded-full">
                        <X className="text-gray-500" />
                    </button>
                </div>
                <div className="prose prose-sm max-w-none">
                    {/* Terms content here */}
                </div>
                <div className="mt-6 flex justify-end">
                    <button onClick={() => setShowTerms(false)} className="px-4 py-2 bg-[#0081C9] text-white rounded-lg hover:bg-[#006BA8] transition-colors">
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

                    {successMessage && (
                        <div className="mb-4 text-green-600 text-center">
                            {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative">
                                <User className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0081C9] text-gray-800 transition-all duration-200"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    autoComplete="given-name" // Add this line
                                />
                            </div>
                            <div className="relative">
                                <User className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0081C9] text-gray-800 transition-all duration-200"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    autoComplete="family-name" // Add this line
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
                                    autoComplete="email" // Add this line
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
                                    autoComplete="new-password" // Add this line
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
                                    autoComplete="new-password" // Add this line
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
                            disabled={loading} // Disable button when loading
                            className={`w-full py-2 px-4 rounded-lg shadow-lg text-sm font-medium text-white ${loading ? 'bg-gray-400' : 'bg-[#0081C9] hover:bg-[#006BA8]'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0081C9] transition-all duration-200`}
                        >
                            {loading ? 'Signing up...' : 'Sign up'} {/* Show loading text */}
                        </button>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link href="/auth/sign-in" className="font-medium text-[#0081C9] hover:text-[#006BA8]">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {showTerms && <TermsModal />}
        </main>
    );
}