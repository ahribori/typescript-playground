import * as mongoose from 'mongoose';
import config from '../config';

export const connectMongoDB = () =>
  mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
