import { gql } from 'apollo-boost';

export const SEARCH_REPO = gql`
  query SearchRepo($searchTerm: String!) {
    search(query: $searchTerm, type: REPOSITORY, first: 100) {
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
`;
