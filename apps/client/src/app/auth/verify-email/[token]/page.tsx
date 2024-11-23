'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { VERIFICATION } from '@/graphql/mutations';
import Link from 'next/link';



export default function VerifyEmail() {
    const params = useParams();
    const [verifying, setVerifying] = useState(false);
    const [message, setMessage] = useState<string>('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Extract token from params and ensure it's a string
    const token = typeof params?.token === 'string'
        ? params.token
        : Array.isArray(params?.token)
            ? params.token[0]
            : '';

    // Setup verification mutation
    const [verifyEmail] = useMutation<{ verification: string }>(VERIFICATION, {
        onCompleted: (data) => {
            setMessage(data.verification);
            setIsError(false);
            setIsSuccess(true);
        },
        onError: (error) => {
            setMessage(error.message || 'Verification failed. Please try again.');
            setIsError(true);
            setIsSuccess(false);
        }
    });

    useEffect(() => {
        if (!token) {
            setMessage('No verification token found.');
            setIsError(true);
            return;
        }

        const handleVerifyEmail = async () => {
            setVerifying(true);
            try {
                await verifyEmail({
                    variables: { token }
                });
            } finally {
                setVerifying(false);
            }
        };

        handleVerifyEmail();
    }, [token, verifyEmail]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-md">
                <div className="rounded-lg bg-white p-8 shadow-lg">
                    <h2 className="mb-4 text-2xl font-bold text-gray-800 text-center">
                        Email Verification
                    </h2>

                    {verifying ? (
                        <div className="text-center">
                            <p className="text-gray-600">Verifying your email...</p>
                            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                                <div className="h-full w-1/2 animate-pulse" style={{ backgroundColor: '#006BA8' }}></div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {!message ? (
                                <p className="text-gray-600 text-center">
                                    Please wait while we verify your email address...
                                </p>
                            ) : (
                                <div className={`rounded-md p-4 ${isError
                                    ? 'bg-red-50 text-red-700'
                                    : 'bg-green-50 text-green-700'
                                    }`}>
                                    <p className="text-center font-medium">
                                        {message}
                                    </p>
                                </div>
                            )}

                            {isSuccess && (
                                <div className="mt-6 text-center space-y-4">
                                    <p className="text-gray-600">
                                        Your email has been successfully verified! You can now log in to your account.
                                    </p>
                                    <Link
                                        href="/auth/sign-in"
                                        className="inline-block px-6 py-2 text-white font-medium rounded-md transition-colors duration-200 ease-in-out bg-[#006BA8] hover:bg-[#005885]"
                                    >
                                        Login to Your Account
                                    </Link>
                                </div>
                            )}

                            {isError && (
                                <div className="mt-4 text-center space-y-2">
                                    <p className="text-gray-600">
                                        Already have an account?
                                    </p>
                                    <Link
                                        href="/login"
                                        className="inline-block px-6 py-2 text-white font-medium rounded-md transition-colors duration-200 ease-in-out bg-[#006BA8] hover:bg-[#005885]"
                                    >
                                        Login here
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}