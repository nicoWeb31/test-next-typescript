//route api/feedBack -- no react component !!
import type * as E from "express";
import fs from "fs";
import path from "path";

export const feedBackPath = () => path.join(process.cwd(), "data", "feedbach.json");
export const extractFeedback = (pathname: string) => {
    const fileData = fs.readFileSync(pathname);
    return JSON.parse(fileData.toString());
};

const handler = function (req: E.Request, res: E.Response) {
    if (req.method === "GET") {
        const path = feedBackPath();
        const data = extractFeedback(path);
        return res.status(200).json({ feedBack: data });
    }

    if (req.method === "POST") {
        // const body = JSON.stringify(req.body);
        // console.log(body);

        const { email, text } = req.body;

        const newFeedback = {
            id: Date.now().toString(),
            email,
            text,
        };
        console.log(
            "🚀 ~ file: feedBack.tsx ~ line 24 ~ handler ~ newFeedback",
            newFeedback
        );

        console.log(newFeedback);
        const pathname = feedBackPath();

        const data = extractFeedback(pathname);
        data.push(newFeedback);
        fs.writeFileSync(pathname, JSON.stringify(data));

        return res
            .status(201)
            .json({ message: "create with sucess!", newFeedback });
    }
};

export default handler;
