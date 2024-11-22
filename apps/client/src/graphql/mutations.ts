import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation Register($registerInput: RegisterInput!) {
        register(registerInput: $registerInput)
    }
`;