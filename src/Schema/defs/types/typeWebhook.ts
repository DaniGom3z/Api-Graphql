import { gql } from 'apollo-server-express';

const webhooksTypeDefs = gql`
    type Webhook {
    id: ID
    url: String
    eventos: [String]
    }
`;

export default webhooksTypeDefs;
