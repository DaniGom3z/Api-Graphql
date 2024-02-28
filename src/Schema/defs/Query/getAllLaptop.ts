import { gql } from 'apollo-server-express';

const getAllLaptop = gql`
    type Query {
        getAllLaptops(page: Int, pageSize: Int): [Laptop]
    }

`;

export default getAllLaptop;