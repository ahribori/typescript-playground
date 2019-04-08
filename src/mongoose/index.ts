import * as mongoose from 'mongoose';

export const connectMongoDB = () =>
  mongoose.connect('mongodb://192.168.0.200:27018/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
