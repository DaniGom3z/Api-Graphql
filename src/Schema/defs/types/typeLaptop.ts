import { gql } from 'apollo-server-express';

const laptopTypeDefs = gql`
    type Laptop {
        id: ID
        name: String
        ram: String
        pantalla: String
        precio: Float
        marca: String
    }
`;

export default laptopTypeDefs;
