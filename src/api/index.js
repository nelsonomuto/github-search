import axios from 'axios';
import keys from '../keys.json';
const { GITHUB_TOKEN } = keys;

const githubGraphQLEndpoint = 'https://api.github.com/graphql';
const Authorization = `Bearer ${GITHUB_TOKEN}`;

export const extractResults = ({ data: { data: { search }} }) => {
  const results = search.edges.map(edge => edge.node);
  console.log({ results });
  return results;
}

export const apiSearch = async ({ searchTerm, cancelTokenSource }) =>
  extractResults(await axios.post(
    githubGraphQLEndpoint,
    {
      query: `
      query {
        search(query: "${searchTerm}", type: REPOSITORY, first: 100) {
          repositoryCount
          edges {
            node {
              ... on Repository {
                name
                url
                description
              }
            }
          }
        }
      }
    `
    },
    {
      cancelToken: cancelTokenSource.token,
      headers: {
        Authorization,
      }
    }
  ));
