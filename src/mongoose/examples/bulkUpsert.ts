import { connectMongoDB } from '../';
import User from '../schemas/UserSchema';

const bulkOps = [
  {
    updateOne: {
      filter: { id: 1 },
      update: {
        $set: {
          name: 'daniel',
        },
      },
      upsert: true,
    },
  },
  {
    updateOne: {
      filter: { id: 2 },
      update: {
        $set: {
          name: 'dave',
        },
      },
      upsert: true,
    },
  },
  {
    updateOne: {
      filter: { id: 3 },
      update: {
        $set: {
          name: 'blair',
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
