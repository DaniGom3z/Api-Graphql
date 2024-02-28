import LaptopModel, { LaptopDocument } from "../../../models/laptop";

export const getLaptopsByMarca = async (_: void, args: { marca: string ,page: number, pageSize: number}): Promise<LaptopDocument[]> => {
    const { marca,page, pageSize } = args;
    const laptops = await LaptopModel.find({ marca }).skip((page - 1) * pageSize).limit(pageSize);;
    return laptops;
};
