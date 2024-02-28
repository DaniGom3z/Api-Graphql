import { gql } from 'apollo-server-express';

const getLaptopsByMarca = gql`
    type Query {
        getLaptopsByMarca(marca: String!,page: Int, pageSize: Int): [Laptop]
    }
`;

export default getLaptopsByMarca;
