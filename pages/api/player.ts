// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username } = req.query;
  const data = await fetch(`https://mc-api.com/v1/players/${username}`).then(
    (r) => r.json()
  );
  return data;
}
