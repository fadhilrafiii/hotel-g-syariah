import { gql } from "@apollo/client";

export const GQL_MUTATION_LOGIN_USER = gql`
  mutation c($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
