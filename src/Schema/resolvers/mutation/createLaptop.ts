import LaptopModel, { LaptopDocument } from "../../../models/laptop";

export const createLaptop = async (_: void, args: {name:string, ram: string, pantalla: string,precio:number,marca:string }): Promise<LaptopDocument> => {
    const { name, ram, pantalla,precio,marca } = args;
    const newLaptop = new LaptopModel({name, ram, pantalla,precio,marca});
    await newLaptop.save();
    return newLaptop;
};
