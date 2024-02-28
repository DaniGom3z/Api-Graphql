import { gql } from 'apollo-server-express';

const createMouse = gql`
    type Mutation {
        createMouse(precio:Float, marca:String,conexion:String): Mouse
    }
`;

export default createMouse;
