import { hash } from 'bcrypt';
import UserModel, { UserDocument } from "../../../models/user";

export const createUser = async (_: void, args: { username: string, email: string, password: string }): Promise<UserDocument> => {
    const { username, email, password } = args;

    const hashedPassword = await hash(password, 10); 

    const newUser = new UserModel({ username, email, password: hashedPassword });

    await newUser.save();

    return newUser;
};
