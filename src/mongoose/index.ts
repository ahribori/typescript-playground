import * as mongoose from 'mongoose';
import config from '../config';

export const connectMongoDB = () =>
  mongoose.connect(config.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
  });
