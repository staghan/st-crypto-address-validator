import * as middlewares from '../../middlewares';
import bodyParser from 'body-parser';

const app = {
  name: 'st-crypto-address-validator',
  version: '0.0.0',
  middlewares: [
    middlewares.uuid,
    middlewares.morgan,
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
  ],
};

export default app;
