import { gql } from 'apollo-server-express';

const deleteMouse = gql`
    type Mutation {
        deleteMouse(id: ID!): Boolean
    }
`;

export default deleteMouse;
