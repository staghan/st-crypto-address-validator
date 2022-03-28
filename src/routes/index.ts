import { Express } from 'express';
import listEndpoints from 'express-list-endpoints';
import RouteGroup from 'express-route-grouping';
import addresses from './addresses';

const register = (app: Express) => {
  const base = new RouteGroup();

  base.group('api', (api) => {
    api.use('addresses', addresses());
    api.get('', (req: any, res: any) =>
      res.status(200).json({ endpoints: listEndpoints(app) }),
    );
  });

  app.use(base.export());
};

export default register;
