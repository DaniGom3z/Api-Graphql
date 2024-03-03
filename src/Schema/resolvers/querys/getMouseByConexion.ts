import MouseModel, { MouseDocument } from "../../../models/mouse";
import { AuthenticationError } from 'apollo-server-express';

export const getMousesByConexion = async (_: void, args: { conexion: string }, context: any): Promise<MouseDocument[]> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const { conexion } = args;
    const mouses = await MouseModel.find({ conexion });
    return mouses;
};
