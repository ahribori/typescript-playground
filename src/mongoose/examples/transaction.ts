import * as mongoose from 'mongoose';
import User from '../schemas/UserSchema';

export const transactionalTask = async () => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    await User.create({ id: 1, name: 'Daniel', age: 30 }, { session });
    await session.commitTransaction();
  } catch (e) {
    console.log(e);
    await session.abortTransaction();
  }
  session.endSession();
};
