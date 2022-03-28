import RouteGroup from 'express-route-grouping';
import * as controllers from '../../controllers';

const register = () => {
  const base = new RouteGroup();

  base.group(':address', (address) => {
    address.group('validator', (validator) => {
      validator.resource({
        handlers: {
          index: [controllers.addresses.validator],
        },
      });
    });
  });

  base.group('validator', (validator) => {
    validator.resource({
      handlers: {
        index: [controllers.addresses.validator],
      },
    });
  });

  return base.export();
};

export default register;
