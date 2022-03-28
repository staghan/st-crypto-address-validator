import * as uuid from 'uuid';

export default function uuidMV(req: any, res: any, next: () => void) {
  req.id = uuid.v4();
  next();
}
