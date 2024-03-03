import LaptopModel, { LaptopDocument } from "../../../models/laptop";
import { AuthenticationError } from 'apollo-server-express';

export const getLaptopsByPrice = async (_: void, args: { precio: number }, context: any): Promise<LaptopDocument[]> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const { precio } = args;
    const laptops = await LaptopModel.find({ precio });
    return laptops;
};
