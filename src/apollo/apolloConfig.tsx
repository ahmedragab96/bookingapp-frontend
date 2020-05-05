import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

const cache = new InMemoryCache();

cache.writeData({
    data: {
      isLoggedIn: !!localStorage.getItem("AuthUser"),
    },
});

export const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache,
    resolvers: {},
});