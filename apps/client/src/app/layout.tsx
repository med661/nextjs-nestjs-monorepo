import React from 'react';
import '@/app/globals.css';
import CustomLayout from '@/components/layout/CustomLayout';
import ClientLayout from '@/components/layout/ClientLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}