'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function VerifyEmail() {
    const params = useParams();
    const [verifying, setVerifying] = useState(false);
    const [message, setMessage] = useState('');
    const token = Array.isArray(params.token) ? params.token[0] : params.token; // Ensure token is a string

    useEffect(() => {
        if (token) {
            console.log('Token from URL:', token); // Log the token
            handleVerifyEmail(token);
        }
    }, [token]);

    const handleVerifyEmail = async (token: string) => {
        setVerifying(true);
        try {
            // Simulate an API call for email verification
            // Replace this with your actual verification logic
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
            setMessage('Your email has been successfully verified!'); // Success message
        } catch (error) {
            console.error(error);
            setMessage('Verification failed. Please try again.'); // Error message
        } finally {
            setVerifying(false);
        }
    };

    return (
        <main className="flex-grow min-h-screen p-6 bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Verify Your Email</h2>
                    <p className="text-gray-600 mb-4">
                        Hello, please verify your email using the token provided.
                    </p>
                    {verifying && <p className="text-gray-500">Verifying your email...</p>}
                    {message && (
                        <p className={`text-center ${message.includes('failed') ? 'text-red-600' : 'text-green-600'}`}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}