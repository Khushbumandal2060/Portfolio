import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = JSON.parse(req.body);

    console.log(name, email, message); // save to DB later

    res.status(200).json({ message: "Message received!" });
  } else {
    res.status(405).end();
  }
}