import { gql } from 'apollo-server-express';

const getMousesByConexion = gql`
    type Query {
        getMousesByConexion(conexion: String!): [Mouse]
    }
`;

export default getMousesByConexion;
