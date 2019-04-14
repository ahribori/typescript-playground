import * as mongoose from 'mongoose';
import { Model } from 'mongoose';

export interface IUser extends mongoose.Document {
  id: string;
  name: string;
  age: number;
  hidden: boolean;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  age: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false },
  id: { type: String, unique: true },
  name: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

const User: Model<IUser> = mongoose.model('user', userSchema);

export default User;
