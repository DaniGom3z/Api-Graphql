import WebhookModel, { WebhookDocument } from "../../../models/webhook";
import EventWebhookModel from "../../../models/socios"; 
import { AuthenticationError } from 'apollo-server-express';

export const createWebhook = async (_: void, args: { url: string, eventos: string[] }, context: any): Promise<WebhookDocument> => {
    if (!context.user) {
        throw new AuthenticationError('Usuario no autenticado');
    }

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
