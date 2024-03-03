import LaptopModel, { LaptopDocument } from "../../../models/laptop";
import { AuthenticationError } from 'apollo-server-express';

export const updateLaptop = async (_: void, args: { id: string, name: string, ram: string, pantalla: string, precio: number, marca: string }, context: any): Promise<LaptopDocument | null> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const { id, name, ram, pantalla, precio, marca } = args;
    
    const existingLaptop = await LaptopModel.findById(id);
    if (!existingLaptop) {
        return null;
    }

    existingLaptop.name = name;
    existingLaptop.ram = ram;
    existingLaptop.pantalla = pantalla;
    existingLaptop.precio = precio;
    existingLaptop.marca = marca;

    const updatedLaptop = await existingLaptop.save();
    
    return updatedLaptop; 
};
