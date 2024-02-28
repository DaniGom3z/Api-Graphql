import { Schema, model, Document } from "mongoose";

export interface LaptopDocument extends Document {
  name:string,
  ram: string;
  pantalla: string;
  precio: number;
  marca:string;
}

const laptopSchema: Schema<LaptopDocument> = new Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  ram: {
    type: String,
    required: true,
  },
  pantalla: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
});

const LaptopModel = model<LaptopDocument>("Laptops", laptopSchema);

export default LaptopModel;
