import MouseModel, { MouseDocument } from "../../../models/mouse";

export const getMousesByMarca = async (_: void, args: { marca: string }): Promise<MouseDocument[]> => {
    const { marca } = args;
    const mouses = await MouseModel.find({ marca });
    return mouses;
};
