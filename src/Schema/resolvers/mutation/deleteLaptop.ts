import LaptopModel from "../../../models/laptop";

export const deleteLaptop = async (_: void, args: { id: string }): Promise<boolean> => {
    const { id } = args;
    
    // Busca la laptop por su ID y la elimina
    const deletedLaptop = await LaptopModel.findByIdAndDelete(id);
    
    // Si la laptop fue eliminada correctamente, devuelve true
    if (deletedLaptop) {
        return true;
    } else {
        return false; // Si la laptop no existe, devuelve false
    }
};
