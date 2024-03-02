import WebhookModel, { WebhookDocument } from "../../../models/webhook";
import EventWebhookModel from "../../../models/socios"; // Importa el modelo de la tabla de asociación

export const createWebhook = async (_: void, args: { url: string, eventos: string[] }): Promise<WebhookDocument> => {
  try {
    const nuevoWebhook = new WebhookModel({
      url: args.url,
      eventos: args.eventos
    });

    const webhookGuardado = await nuevoWebhook.save();

    for (const evento of args.eventos) {
      await EventWebhookModel.create({ event: evento, webhookUrl: args.url });
    }

    return webhookGuardado;
  } catch (error) {
    throw new Error("No se pudo crear el webhook.");
  }
};
