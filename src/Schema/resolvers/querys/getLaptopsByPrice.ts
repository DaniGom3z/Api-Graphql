import LaptopModel, { LaptopDocument } from "../../../models/laptop";

export const getLaptopsByPrice = async (_: void, args: { precio: Number }): Promise<LaptopDocument[]> => {
    const { precio } = args;
    const laptops = await LaptopModel.find({ precio });
    return laptops;
};
