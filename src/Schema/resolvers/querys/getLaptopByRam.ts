import LaptopModel, { LaptopDocument } from "../../../models/laptop";

export const getLaptopsByRam = async (_: void, args: { ram: string }): Promise<LaptopDocument[]> => {
    const { ram } = args;
    const laptops = await LaptopModel.find({ ram });
    return laptops;
};
