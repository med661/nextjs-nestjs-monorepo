"use client";

import { useState } from "react";
import { Mail, Lock, ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email:", email);
        // Add logic to send password reset email
    };

    return (
        <main className="flex-grow min-h-screen p-6 bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                            <ArrowRightCircle className="mr-2 text-[#0081C9]" />
                            Forgot Your Password?
                        </h2>
                        <p className="text-gray-600">Enter your email to receive a password reset link</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
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
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-lg shadow-lg text-sm font-medium text-white bg-[#0081C9] hover:bg-[#006BA8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0081C9] transition-all duration-200"
                        >
                            Send Reset Link
                        </button>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                Remembered your password?{" "}
                                <Link href="/auth/sign-in" className="font-medium text-[#0081C9] hover:text-[#006BA8]">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
