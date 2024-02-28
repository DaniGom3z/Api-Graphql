import MouseModel from "../../../models/mouse";

export const deleteMouse = async (_: void, args: { id: string }): Promise<boolean> => {
    const { id } = args;
    
    const deletedMouse = await MouseModel.findByIdAndDelete(id);
    
    if (deletedMouse) {
        return true;
    } else {
        return false; 
    }
};
