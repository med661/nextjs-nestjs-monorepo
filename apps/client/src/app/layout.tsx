import React from 'react';
import '@/app/globals.css';
import CustomLayout from '@/components/layout/CustomLayout';
import ClientLayout from '@/components/layout/ClientLayout';
import ApolloProviderComponent from '@/components/ApolloProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <ApolloProviderComponent>
            {children}
          </ApolloProviderComponent>

        </ClientLayout>
      </body>
    </html>
  );
}