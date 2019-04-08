import { connectMongoDB } from './mongoose';
import { transactionalTask } from './mongoose/examples/transaction';

connectMongoDB()
  .then(async () => {
    try {
      await transactionalTask();
    } catch (e) {
      console.log(e);
    }
  })
  .catch(console.error);
