// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function getFaucet(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const details: any = {
    address: req.query.address,
  };

  const formBody: string[] = [];
  for (const property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  const formBodyStr: string = formBody.join('&');

  await fetch('http://44.211.12.215:3000/api/get-faucet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formBodyStr,
  }).then(async (apiRes) => {
    if (apiRes.status !== 200) {
      res.status(400).json({ success: 'error', message: await apiRes.text() });
    } else {
      res.status(200).json({ success: 'success', data: await apiRes.text() });
    }
  });
}