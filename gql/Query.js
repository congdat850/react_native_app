import { gql } from "@apollo/client";
import { findNodeHandle } from "react-native";

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

// 1. query findOne 

// query {
//   stores(filters:{name: {eq: "iphone 11"}}) {
//     data{
//       id,
//       attributes {
//         name,
//         describe,
//         price,
//         image
//       }
//     }
//   }
// }

// 2. query find 

// query {
//   stores {
//     data{
//       id,
//       attributes {
//         name,
//         describe,
//         price,
//         image
//       }
//     }
//   }
// }

// 3. Create new entry

// mutation createStore {
//   createStore(data: { name: "Hello"}) {
//     data {
//       id
//       attributes {
//         name
//       }
//     }
//   }
// }

