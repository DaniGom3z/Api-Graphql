import { gql } from 'apollo-server-express';

const createLaptop = gql`
    type Mutation {
        createLaptop(name:String, ram: String, pantalla: String, precio:Float, marca:String): Laptop
    }
`;

export default createLaptop;
