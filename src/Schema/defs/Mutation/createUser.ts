import { gql } from 'apollo-server-express';

const createUser = gql`
    type Mutation {
        createUser(username:String,email: String, password: String,webhook:String): User
    }
`;

export default createUser;
