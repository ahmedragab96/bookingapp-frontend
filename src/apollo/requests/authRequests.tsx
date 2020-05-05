import { gql } from 'apollo-boost';

export const SIGN_UP = gql`
    mutation signUp ($email: String!, $password: String!) {
        createUser (userInput: {
                email: $email,
                password: $password
        }) {
            _id
            email
        }
    }
`;

export const SIGN_IN = gql`
    mutation logining ($email: String!  , $password: String!) {
       login(email: $email , password: $password) {
            token
            userId
            ExpirationPeriod
        }
   }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

