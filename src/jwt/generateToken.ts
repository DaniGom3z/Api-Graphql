import jwt from "jsonwebtoken";
import UserModel, { UserDocument } from "../models/user";
import { config } from "dotenv";
config();

const secretKey = process.env.JWT_SECRET || "default_secret";

export function generateAuthToken(user: UserDocument): string {
    const payload = {
      userId: user._id,
      email: user.email,
    };
  
    const options: jwt.SignOptions = {
      expiresIn: "1h",
    };
  
    try {
      const token = jwt.sign(payload, secretKey, options);
      return token;
    } catch (error) {
      console.error("Error al generar el token:", error);
      throw new Error("Error al generar el token de autenticación");
    }
  }
