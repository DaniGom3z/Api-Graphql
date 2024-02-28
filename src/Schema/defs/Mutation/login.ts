import { gql } from "apollo-server-express";

const login=gql`
type Mutation {
  login(email: String!, password: String!): AuthPayload!
}

type AuthPayload {
  token: String
  user: User
}

`

export default login