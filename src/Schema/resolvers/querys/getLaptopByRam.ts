import LaptopModel, { LaptopDocument } from "../../../models/laptop";
import { AuthenticationError } from 'apollo-server-express';


export const getLaptopsByRam = async (_: void, args: { ram: string }, context: any): Promise<LaptopDocument[]> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }
    const { ram } = args;
    const laptops = await LaptopModel.find({ ram });
    return laptops;
};
