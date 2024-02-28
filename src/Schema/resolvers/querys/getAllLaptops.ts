import LaptopModel, { LaptopDocument } from "../../../models/laptop";

export const getAllLaptops = async (_: void, args: { page: number, pageSize: number }): Promise<LaptopDocument[] | null> => {
    const { page, pageSize } = args;
    const laptops = await LaptopModel.find().skip((page - 1) * pageSize).limit(pageSize);
    return laptops;
};
