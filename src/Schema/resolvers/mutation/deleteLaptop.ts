import LaptopModel from "../../../models/laptop";
import { AuthenticationError } from 'apollo-server-express';

export const deleteLaptop = async (_: void, args: { id: string }, context: any): Promise<boolean> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const { id } = args;
    
    const deletedLaptop = await LaptopModel.findByIdAndDelete(id);
    
    if (deletedLaptop) {
        return true;
    } else {
        return false; 
    }
};
