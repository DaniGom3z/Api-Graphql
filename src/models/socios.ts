import { Schema, model, Document } from "mongoose";

interface EventWebhookDocument extends Document {
  event: string;
  webhookUrl: string;
}

const eventWebhookSchema = new Schema<EventWebhookDocument>({
  event: { type: String, required: true },
  webhookUrl: { type: String, required: true }
});

const EventWebhookModel = model<EventWebhookDocument>("EventWebhook", eventWebhookSchema);

export default EventWebhookModel;
