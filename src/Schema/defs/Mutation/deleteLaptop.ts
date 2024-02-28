import { gql } from 'apollo-server-express';

const deleteLaptop = gql`
    type Mutation {
        deleteLaptop(id: ID!): Boolean
    }
`;

export default deleteLaptop;
