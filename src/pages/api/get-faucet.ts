// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function getFaucet(req: NextApiRequest, res: NextApiResponse) {
  const details: any = {
    address: req.body.address,
  };

  const formBody: string[] = [];
  for (const property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  const formBodyStr: string = formBody.join('&');

  fetch('http://44.211.12.215:3000/api/get-faucet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formBodyStr,
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(() => {
      res.status(200).json({ success: false });
    });
}
