import MouseModel, { MouseDocument } from "../../../models/mouse";
import { AuthenticationError } from 'apollo-server-express';

export const updateMouse = async (_: void, args: { id: string, precio: number, marca: string, conexion: string }, context: any): Promise<MouseDocument | null> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const { id, precio, marca, conexion } = args;
    
    const existingMouse = await MouseModel.findById(id);
    if (!existingMouse) {
        return null; 
    }

    existingMouse.precio = precio;
    existingMouse.marca = marca;
    existingMouse.conexion = conexion;

    const updatedMouse = await existingMouse.save();
    
    return updatedMouse; 
};
