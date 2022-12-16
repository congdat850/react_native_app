import { gql } from "@apollo/client";

// export const CONTINENT_QUERY = gql`
//   query ContinentQuery {
//     continents {
//       code
//       name
//     }
//   }
// `;

export const CONTINENT_QUERY = gql`
query {
    stores {
      data{
        id,
        attributes {
          name,
          describe,
          price,
          image
        }
      }
    }
  }
`;