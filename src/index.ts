import { connectMongoDB } from './mongoose';
import User, { IUser } from './mongoose/schemas/UserSchema';

const bulkOps = [
  {
    updateOne: {
      filter: { id: 1 },
      update: {
        $set: {
          name: 'updated1',
        },
      },
      upsert: true,
    },
  },
  {
    updateOne: {
      filter: { id: 13 },
      update: {
        $set: {
          name: 'updated2',
        },
      },
      upsert: true,
    },
  },
];

connectMongoDB().then(async () => {
  User.bulkWrite(bulkOps)
    .then(() => {
      console.log('ok');
    })
    .catch(e => {
      console.log(e.message);
    });
});
