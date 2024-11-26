import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation Register($registerInput: RegisterInput!) {
        register(registerInput: $registerInput)
    }
`;
export const VERIFICATION = gql`
mutation Verification($token: String!) {
    verification(token: $token)
}
`;
export const LOGIN_USER = gql`
    mutation Login($loginInput: LoginInput!) {
        login(loginInput: $loginInput) {
            accessToken
            user {
                userId
                email
                fullName
                isEmailVerified
                role
            }
        }
    }
`;