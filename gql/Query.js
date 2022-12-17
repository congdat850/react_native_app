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

// 1. query for find

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

// 2. query find all

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

// 3. create new entry

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

// 4. update entry

// mutation updateStore {
//   updateStore(id: "6", data: { name: "test update" }) {
//     data {
//       id
//       attributes {
//         name
//       }
//     }
//   }
// }

// 5. delete entry

// mutation deleteStore {
//   deleteStore(id: 6) {
//     data {
//       id
//       attributes {
//         name
//       }
//     }
//   }
// }

// 6. findOne (delete the "s" at the end of the entry)

// query {
//   store(id:2) {
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


