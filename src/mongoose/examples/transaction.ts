import * as mongoose from 'mongoose';

const Customer = mongoose.model(
  'Customer',
  new mongoose.Schema({ name: String }),
);

export const transactionalTask = async () => {
  let session: any = null;
  mongoose
    .startSession()
    .then(_session => {
      session = _session;
      session.startTransaction();
      return Customer.create({ name: 'daniel' }, { session });
    })
    .then(() => Customer.findOne({ name: 'daniel' }))
    .then(doc => {
      console.log(doc);
    })
    .then(() => Customer.findOne({ name: 'daniel' }).session(session))
    .then(doc => console.log(doc))
    .then(() => session.commitTransaction())
    .then(() => Customer.findOne({ name: 'daniel' }))
    .then(doc => console.log(doc))
    .catch(e => {
      console.log(e);
    });
  // const session = await mongoose.startSession();
  // session.startTransaction();
  // try {
  //   await User.create({ id: 1, name: 'Daniel', age: 30 }, { session });
  //   await session.commitTransaction();
  // } catch (e) {
  //   console.log(e);
  //   await session.abortTransaction();
  // }
  // session.endSession();
};
