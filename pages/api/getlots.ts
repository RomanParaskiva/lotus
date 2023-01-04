import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      res.json({response: [
        {
          id: 1,
          lotName: "аппарат ЛОТОС №2033564",
          startIn: "09.11.2020 07:00",
        },
        {
          id: 2,
          lotName: "аппарат ЛОТОС №2033789",
          startIn: "28.12.2022 10:06",
        },
      ]});
    } else {
      throw new Error("Method not allowed");
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
