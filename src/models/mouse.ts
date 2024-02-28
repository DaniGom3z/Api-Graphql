import { Schema, model, Document } from "mongoose";

export interface MouseDocument extends Document {
  precio: number;
  marca:string;
  conexion:string;
}

const mouseSchema: Schema<MouseDocument> = new Schema({

  precio: {
    type: Number,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  conexion: {
    type: String,
    required: true,
  },
});

const MouseModel = model<MouseDocument>("mouse", mouseSchema);

export default MouseModel;
