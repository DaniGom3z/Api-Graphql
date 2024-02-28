import UserModel, { UserDocument } from "../../../models/user";

export const getAllUsers = async (): Promise<UserDocument[]> => {
    const users = await UserModel.find();
    return users;
};
