


import { gql } from "@apollo/client";

const CREATE_DOCUMENT = gql`
  mutation createDocument($acronym: String!, $document: DocumentInput) {
    createDocument(acronym: $acronym, document: $document) {
      documentId
    }
  }
`;

export default CREATE_DOCUMENT
