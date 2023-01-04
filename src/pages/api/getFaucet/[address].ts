// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import applyRateLimit from '../../../applyRateLimit';
import { getIP } from '../../../applyRateLimit';
export default async function getFaucet(
  req: NextApiRequest,
  res: NextApiResponse
) {
    // await applyRateLimit(req, res)
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

    const faucetBackendUrl =
      process.env.FAUCET_BACKEND_URL || 'https://api.cascadia.foundation';
    await fetch(`${faucetBackendUrl}/api/get-faucet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBodyStr,
    }).then(async (apiRes) => {
      if (apiRes.status !== 200) {
        res.status(400).json({ success: 'error', message: await apiRes.text(), ip: getIP(req) });
      } else {
        res
          .status(200)
          .json({ success: 'success', message: await apiRes.text(), ip: getIP(req) });
      }
    });
  }