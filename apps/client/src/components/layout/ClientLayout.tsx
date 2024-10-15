'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import CustomLayout from './CustomLayout';
import Navbar from './NavBar';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const isAuthPage = pathname.startsWith('/auth');

    if (isAuthPage) {
        return <>{children}</>;
    }

    return (
        <>
            <CustomLayout>{children}</CustomLayout>
        </>
    );
}