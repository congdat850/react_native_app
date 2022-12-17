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

// 2. query find 
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

// mutation updateArticle {
//   updateArticle(id: "1", data: { title: "Hello" }) {
//     data {
//       id
//       attributes {
//         title
//       }
//     }
//   }
// }

