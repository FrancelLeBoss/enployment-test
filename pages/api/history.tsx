import { NextApiRequest ,NextApiResponse } from "next";

export default function getHistory(req:NextApiRequest, res:NextApiResponse)
{
    if (req.method!=="GET") {
        res.status(500).json({message:"We only accept GET requests"})
    }
    res.json({hello:"World", method: req.method})
}