import { gql } from 'apollo-server-express';

const getLaptopsByPrice = gql`
    type Query {
        getLaptopsByPrice(precio: Float): [Laptop]
    }
`;

export default getLaptopsByPrice;
