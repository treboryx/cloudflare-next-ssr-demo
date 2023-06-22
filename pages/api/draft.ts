import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Draft entered");
  res.setDraftMode({ enable: true });
  res.redirect(`/${req.query.slug}`);
};
