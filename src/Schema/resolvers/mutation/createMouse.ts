import MouseModel, { MouseDocument } from "../../../models/mouse";
import EventWebhookModel from "../../../models/socios";
import { notify } from '../../../webhook/noticacion';


export const createMouse = async (_: void, args: {precio:number,marca:string,conexion:string }): Promise<MouseDocument> => {
    const {precio,marca,conexion } = args;
    const newMouse = new MouseModel({precio,marca,conexion});
    await newMouse.save();
    const webhooks = await EventWebhookModel.find({ event: "createMouse" });

        for (const webhook of webhooks) {
          await notify(webhook.webhookUrl, "Se creo un nuevo mouse");
        }
    return newMouse;
};
