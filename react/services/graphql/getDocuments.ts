import { gql } from "@apollo/client";


const GET_DOCUMENT = gql`
  query GetDocuments($acronym: String, $fields: [String], $where: String) {
    documents(acronym: $acronym, pageSize:100,fields: $fields, where: $where) {
      id
      fields {
        key
        value
      }
    }
  }
`;

export default GET_DOCUMENT
