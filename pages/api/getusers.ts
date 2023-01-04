import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      res.json({
        response: [
          ["Участник - 1", "-", "80", "24", "35%", "2 500 000"],
          ["Участник - 2", "-", "90", "24", "50%", "2 500 000"],
          ["Участник - 3", "-", "100", "24", "90%", "2 500 000"],
          ["Участник - 4", "-", "120", "24", "120%", "2 500 000"],
          ["Участник - 5", "-", "150", "24", "123%", "2 500 000"],
        ],
      });
    } else {
      throw new Error("Method not allowed");
    }
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
