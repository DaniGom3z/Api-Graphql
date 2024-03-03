import { AuthenticationError } from "apollo-server-express";
import UserModel, { UserDocument } from "../../../models/user";
import { generateAuthToken } from "../../../jwt/generateToken";

interface LoginArgs {
  email: string;
  password: string;
}

interface AuthPayload {
  token: string;
  user: UserDocument;
}

export const login = async (
  _: any,
  { email, password }: LoginArgs
): Promise<AuthPayload> => {
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new AuthenticationError("Usuario no encontrado");
    }

    const isPasswordValid = await user.isValidPassword(password);

    if (!isPasswordValid) {
      throw new AuthenticationError("Contraseña incorrecta");
    }

    const token = generateAuthToken(user);

    return {
      token,
      user,
    };
  } catch (error) {
    if (error instanceof AuthenticationError) {
      throw error;
    } else {
      throw new Error("Error interno del servidor");
    }
  }
};

