import MouseModel, { MouseDocument } from "../../../models/mouse";

export const createMouse = async (_: void, args: {precio:number,marca:string,conexion:string }): Promise<MouseDocument> => {
    const {precio,marca,conexion } = args;
    const newMouse = new MouseModel({precio,marca,conexion});
    await newMouse.save();
    return newMouse;
};
