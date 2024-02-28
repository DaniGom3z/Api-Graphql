import { gql } from 'apollo-server-express';

const mouseTypeDefs = gql`
    type Mouse {
        id: ID
        precio: Float
        marca: String
        conexion: String
    }
`;

export default mouseTypeDefs;
