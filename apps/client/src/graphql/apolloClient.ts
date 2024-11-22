import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql', // Replace with your NestJS GraphQL endpoint
    cache: new InMemoryCache(),
});

export default client;