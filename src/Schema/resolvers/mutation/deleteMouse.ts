import MouseModel from "../../../models/mouse";
import { AuthenticationError } from 'apollo-server-express';

export const deleteMouse = async (_: void, args: { id: string }, context: any): Promise<boolean> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const { id } = args;
    
    const deletedMouse = await MouseModel.findByIdAndDelete(id);
    
    if (deletedMouse) {
        return true;
    } else {
        return false; 
    }
};
