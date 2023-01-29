import { gql } from "@apollo/client";

export const GQL_MUTATION_LOGIN_USER = gql`
  query me {
    me {
      username
      role
    }
  }
`;
