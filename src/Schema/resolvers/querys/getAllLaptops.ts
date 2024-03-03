import LaptopModel, { LaptopDocument } from "../../../models/laptop";
import { AuthenticationError } from 'apollo-server-express';

export const getAllLaptops = async (_: void, args: { page: number, pageSize: number }, context: any): Promise<LaptopDocument[] | null> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const { page, pageSize } = args;
    const laptops = await LaptopModel.find().skip((page - 1) * pageSize).limit(pageSize);
    return laptops;
};
