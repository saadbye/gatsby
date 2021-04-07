import { VercelRequest, VercelResponse } from '@vercel/node';

export default (_req: VercelRequest, res: VercelResponse) => {
  const date = new Date().toString();
  const offset = new getTimezoneOffset();
  res.status(200).send(date, offset);
};
