import { hash } from 'bcrypt';
import UserModel, { UserDocument } from "../../../models/user";

export const createUser = async (_: void, args: { username: string, email: string, password: string }): Promise<UserDocument> => {
    const { username, email, password } = args;

    // Encriptar la contraseña antes de guardarla en la base de datos
    const hashedPassword = await hash(password, 10); // Aquí 10 es el número de rondas de hashing

    // Crear un nuevo usuario con la contraseña encriptada
    const newUser = new UserModel({ username, email, password: hashedPassword });

    // Guardar el usuario en la base de datos
    await newUser.save();

    return newUser;
};
