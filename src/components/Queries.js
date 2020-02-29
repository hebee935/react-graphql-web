
import { gql } from "apollo-boost";

export const LOGIN_QUERY = gql `
    mutation loginMutation($uid: String!, $password: String!) {
        login(uid: $uid, password: $passwod) {
          token
          user {
              id
              uid
              firstname
              lastname
              email
          }
        }
      }
`;