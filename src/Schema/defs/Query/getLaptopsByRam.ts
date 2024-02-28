import { gql } from 'apollo-server-express';

const getLaptopsByRam = gql`
    type Query {
        getLaptopsByRam(ram: String!): [Laptop]
    }
`;

export default getLaptopsByRam;
