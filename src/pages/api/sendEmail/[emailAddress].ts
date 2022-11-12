// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function sendEmail(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const details: any = {
        requestJson: req.query.requestJson,
    };

    const formBody: string[] = [];
    for (const property in details) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + '=' + encodedValue);
    }
    const formBodyStr: string = formBody.join('&');

    const faucetBackendUrl =
        process.env.FAUCET_BACKEND_URL || 'http://18.211.35.61:3001';

    await fetch(`${faucetBackendUrl}/api/send-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formBodyStr,
    }).then(async (apiRes) => {
        if (apiRes.status !== 200) {
            res.status(400).json({ success: 'error', message: await apiRes.text() });
        } else {
            res
                .status(200)
                .json({ success: 'success', message: await apiRes.text() });
        }
    });
}
