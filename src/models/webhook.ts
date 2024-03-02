import { Schema, model, Document } from "mongoose";

export interface WebhookDocument extends Document {
  url: string;
  eventos: string[]; 
}

const webhookSchema = new Schema<WebhookDocument>({
  url: { type: String, required: true },
  eventos: [{ type: String, required: true }] 
});

const WebhookModel = model<WebhookDocument>("Webhook", webhookSchema);

export default WebhookModel;
