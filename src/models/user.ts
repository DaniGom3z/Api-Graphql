import { Schema, model, Document, Model } from "mongoose";
import bcrypt from "bcrypt";

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  isValidPassword(password: string): Promise<boolean>; 
}

const userSchema: Schema<UserDocument> = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
});

userSchema.methods.isValidPassword = async function(password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const UserModel: Model<UserDocument> = model<UserDocument>("Usuario", userSchema);

export default UserModel;
