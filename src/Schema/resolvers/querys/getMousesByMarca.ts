import MouseModel, { MouseDocument } from "../../../models/mouse";
import { AuthenticationError } from 'apollo-server-express';

export const getMousesByMarca = async (_: void, args: { marca: string }, context: any): Promise<MouseDocument[]> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const { marca } = args;
    const mouses = await MouseModel.find({ marca });
    return mouses;
};
