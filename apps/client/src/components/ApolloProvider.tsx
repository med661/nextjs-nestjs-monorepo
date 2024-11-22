'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/graphql/apolloClient';

const ApolloProviderComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderComponent;