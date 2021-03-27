import express from "express";
import { Feedback } from "../../interfaces/envent";

import { extractFeedback, feedBackPath } from "./feedBack";

const handler = (req: express.Request, res: express.Response) => {
    if (req.method === "GET") {
        const feedId = req.query.feedId;
        const filePath = feedBackPath();
        const feedBackData = extractFeedback(filePath);

        const selectedfeed = feedBackData.find(
            (f: Feedback) => f.id === feedId
        );

        return res.status(200).json({ feedback: selectedfeed });
    }
};

export default handler;
