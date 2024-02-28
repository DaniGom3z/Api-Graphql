import { gql } from 'apollo-server-express';

const updateLaptop = gql`
    type Mutation {
        updateLaptop(id: ID!, name: String, ram: String, pantalla: String, precio: Float, marca: String): Laptop
    }
`;

export default updateLaptop;
