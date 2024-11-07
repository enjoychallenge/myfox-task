import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://yoga.myfox.cz/test/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTXlGb3hJZCI6ImNrd3E2NmIwdjJmeHowNzgzeG12a3lsZGwiLCJzdWJqZWN0SWQiOiJja3dxNjZha3YyZncyMDc4MzZ1bjU3c3N5Iiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzI0NzUxODIyfQ.s0X16EnXwn-QmD3iM_GaBwB2K0_0EiD9KXyZL-TFJf0',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
