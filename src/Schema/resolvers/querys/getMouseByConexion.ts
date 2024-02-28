import MouseModel, { MouseDocument } from "../../../models/mouse";

export const getMousesByConexion = async (_: void, args: { conexion: string }): Promise<MouseDocument[]> => {
    const { conexion } = args;
    const mouses = await MouseModel.find({ conexion });
    return mouses;
};
