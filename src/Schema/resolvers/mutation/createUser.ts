import { hash } from 'bcrypt';
import UserModel, { UserDocument } from "../../../models/user";
import EventWebhookModel from "../../../models/socios";
import { notify } from '../../../webhook/noticacion';


export const createUser = async (_: void, args: { username: string, email: string, password: string}): Promise<UserDocument> => {
    const { username, email, password } = args;

    const hashedPassword = await hash(password, 10); 

    const newUser = new UserModel({ username, email, password: hashedPassword });

    await newUser.save();

    const webhooks = await EventWebhookModel.find({ event: "createUser" });

    for (const webhook of webhooks) {
      await notify(webhook.webhookUrl, "se creo un nuevo usuario");
    }

    return newUser;
};
