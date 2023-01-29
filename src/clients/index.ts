import { getAuthToken } from "./../shared/utils/auth";
import {
  ApolloClient,
  createHttpLink,
  DefaultContext,
  GraphQLRequest,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_BACKEND_URL,
});

const authLink = setContext(
  (_: GraphQLRequest, { headers }: DefaultContext) => {
    const token = getAuthToken();

    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  }
);

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
