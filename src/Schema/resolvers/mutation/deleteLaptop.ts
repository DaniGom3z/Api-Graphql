import LaptopModel from "../../../models/laptop";

export const deleteLaptop = async (_: void, args: { id: string }): Promise<boolean> => {
    const { id } = args;
    
    const deletedLaptop = await LaptopModel.findByIdAndDelete(id);
    
    if (deletedLaptop) {
        return true;
    } else {
        return false; 
    }
};
