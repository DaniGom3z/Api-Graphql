import LaptopModel, { LaptopDocument } from "../../../models/laptop";
import { AuthenticationError } from 'apollo-server-express';

export const getLaptopsByMarca = async (_: void, args: { marca: string, page: number, pageSize: number }, context: any): Promise<LaptopDocument[]> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const { marca, page, pageSize } = args;
    const laptops = await LaptopModel.find({ marca }).skip((page - 1) * pageSize).limit(pageSize);
    return laptops;
};
