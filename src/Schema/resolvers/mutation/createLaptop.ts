import LaptopModel, { LaptopDocument } from "../../../models/laptop";
import UserModel, { UserDocument } from "../../../models/user";
import EventWebhookModel from "../../../models/socios";
import { notify } from '../../../webhook/noticacion';

export const createLaptop = async (_: void, args: {name:string, ram: string, pantalla: string,precio:number,marca:string }): Promise<LaptopDocument> => {
    const { name, ram, pantalla,precio,marca } = args;
    const newLaptop = new LaptopModel({name, ram, pantalla,precio,marca});
    await newLaptop.save();
        const webhooks = await EventWebhookModel.find({ event: "createLaptop" });

        for (const webhook of webhooks) {
          await notify(webhook.webhookUrl, "Se creo una nueva laptop");
        }
    
    return newLaptop;
};
