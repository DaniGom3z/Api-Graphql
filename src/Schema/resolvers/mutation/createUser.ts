import { hash } from 'bcrypt';
import UserModel, { UserDocument } from "../../../models/user";
import EventWebhookModel from "../../../models/socios";
import { notify } from '../../../webhook/noticacion';


export const createUser = async (_: void, args: { username: string, email: string, password: string}): Promise<UserDocument> => {
    const { username, email, password } = args;

    const hashedPassword = await hash(password, 10); 

    const newUser = new UserModel({ username, email, password: hashedPassword });

    await newUser.save();

    // Obtén los webhooks asociados con el evento "createUser"
    const webhooks = await EventWebhookModel.find({ event: "createUser" });

    // Para cada webhook asociado, envía la notificación
    for (const webhook of webhooks) {
      await notify(webhook.webhookUrl, "se creo un nuevo usuario");
    }

    return newUser;
};
