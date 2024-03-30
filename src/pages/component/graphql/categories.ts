import { gql } from '@apollo/client';

export const CATEGORIES = gql`
  {
    categories {
      total_count
      items {
        name
        uid
        children {
          name
          uid
        }
      }
    }
  }
`;
