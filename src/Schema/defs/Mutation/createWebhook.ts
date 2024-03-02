import { gql } from 'apollo-server-express';

const createWebhook = gql`
    type Mutation {
    createWebhook(url: String, eventos: [String]): Webhook
  }
`;

export default createWebhook;
