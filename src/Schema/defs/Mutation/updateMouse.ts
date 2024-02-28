import { gql } from 'apollo-server-express';

const updateMouse = gql`
    type Mutation {
        updateMouse(id: ID!,precio: Float, marca: String,conexion:String): Mouse
    }
`;

export default updateMouse;
