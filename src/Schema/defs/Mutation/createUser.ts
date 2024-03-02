import { gql } from 'apollo-server-express';

const createUser = gql`
    type Mutation {
        createUser(username:String,email: String, password: String): User
    }
`;

export default createUser;
