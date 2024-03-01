import { hash } from 'bcrypt';
import UserModel, { UserDocument } from "../../../models/user";

export const createUser = async (_: void, args: { username: string, email: string, password: string, webhook: string }): Promise<UserDocument> => {
    const { username, email, password, webhook } = args;

    const hashedPassword = await hash(password, 10); 

    const newUser = new UserModel({ username, email, password: hashedPassword });

    await newUser.save();

    await notifyUser({ username, email }, webhook, 'user_created');

    return newUser;
};
export const notifyUser = async (
    data: { username: string, email: string },
    url: string,
    event: string
  ): Promise<void> => {
    try {
      const discordMessage = `Nuevo usuario registrado:\n\nUsername: ${data.username}\nEmail: ${data.email}`;
  
      const body = {
        content: discordMessage,
        username: "Usuarios registrados", 
      };
  
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`Error sending data to Discord webhook: ${response.statusText}`);
      }
  
      console.log(`Data sent to Discord webhook at ${url}`);
    } catch (error) {
      console.error("Error sending data to Discord:", error);
      throw new Error("Error sending data to Discord webhook");
    }
  };
  