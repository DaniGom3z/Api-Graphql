import MouseModel, { MouseDocument } from "../../../models/mouse";

export const getMousesByPrice = async (_: void, args: { precio: Number }): Promise<MouseDocument[]> => {
    const { precio } = args;
    const mouses = await MouseModel.find({ precio });
    return mouses;
};
