import { gql } from 'apollo-boost';

export const GET_EVENTS = gql`
  query getEvents {
    events {
      _id
      title
      description
      price
    }
  }
`;