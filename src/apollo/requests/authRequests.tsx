import { gql } from 'apollo-boost';

export const signupQuery = gql`
    query($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            userId
            token
        }
    }
`;
