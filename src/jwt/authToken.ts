import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config();


const secretKey = process.env.JWT_SECRET || "default_secret";

// Función para verificar el token
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    console.log(secretKey)
    return decoded;
  } catch (error) {
    throw new AuthenticationError('Token inválido o expirado');
  }
};
