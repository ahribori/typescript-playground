import { Linter } from 'tslint';
import { connectMongoDB } from './mongoose';
import { transactionalTask } from './mongoose/examples/transaction';

const linter = new Linter({
  fix: false,
});

connectMongoDB()
  .then(async () => {
    try {
      await transactionalTask();
    } catch (e) {
      console.log(e);
    }
  })
  .catch(console.error);
