import MouseModel, { MouseDocument } from "../../../models/mouse";
import { AuthenticationError } from 'apollo-server-express';

export const getMousesByPrice = async (_: void, args: { precio: number }, context: any): Promise<MouseDocument[]> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const { precio } = args;
    const mouses = await MouseModel.find({ precio });
    return mouses;
};
