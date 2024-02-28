import { gql } from 'apollo-server-express';

const userTypeDefs = gql`
    type User {
        id: ID
        username: String
        email: String
        password: String
    }
`;

export default userTypeDefs;
