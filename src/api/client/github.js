import ApolloClient from 'apollo-boost';
import keys from '../../keys.json';
const { GITHUB_TOKEN } = keys;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${GITHUB_TOKEN}`
  }
});

export default client;