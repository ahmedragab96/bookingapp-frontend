import { gql } from 'apollo-boost';

export const SIGN_UP = gql`
 mutation($email: String!, $password: String!) {
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
 	query($email: String!, $password: String!) {
	  login(email: $email , password: $password) {
    	userId
     token
    }
	}
`;

