import { gql } from 'apollo-server-express';

const getMousesByMarca = gql`
    type Query {
        getMousesByMarca(marca: String!): [Mouse]
    }
`;

export default getMousesByMarca;
