import { connect } from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await connect("mongodb://127.0.0.1:27017/proyecto");
    console.log("base de datos conectada exitosamente");
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
