import UserModel, { UserDocument } from "../../../models/user";
import { AuthenticationError } from 'apollo-server-express';

export const getAllUsers = async (_: void, _args: void, context: any): Promise<UserDocument[]> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

    const users = await UserModel.find();
    return users;
};
