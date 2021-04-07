import { VercelRequest, VercelResponse } from '@vercel/node';

export default (_req: VercelRequest, res: VercelResponse) => {
  const date = new Date();
  const datedst = date.getTimezoneOffset().tostring();
  res.status(200).send(datedst);
};
