import MouseModel, { MouseDocument } from "../../../models/mouse";

export const updateMouse = async (_: void, args: { id: string,precio: number, marca: string,conexion:string }): Promise<MouseDocument | null> => {
    const { id,precio, marca,conexion } = args;
    
    const existingMouse = await MouseModel.findById(id);
    if (!existingMouse) {
        return null; 
    }
    existingMouse.precio = precio;
    existingMouse.marca = marca;
    existingMouse.conexion = conexion;

    const updatedLaptop = await existingMouse.save();
    
    return updatedLaptop; 
};
