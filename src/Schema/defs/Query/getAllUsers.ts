import { gql } from 'apollo-server-express';

const getAllUsers = gql`
    type Query {
        getAllUsers: [User]
    }
`;

export default getAllUsers;
