import { gql } from 'apollo-server-express';

const getMousesByPrice = gql`
    type Query {
        getMousesByPrice(precio: Float): [Mouse]
    }
`;

export default getMousesByPrice;
