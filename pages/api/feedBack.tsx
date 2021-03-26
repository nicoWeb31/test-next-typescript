//route api/feedBack -- no react component !!
import type * as E from "express";
import fs from "fs";
import path from "path";



const handler = function (req: E.Request, res: E.Response) {
    if (req.method === "GET") {
        return res.status(200).json({ message: "this works" });
    }

    if (req.method === "POST") {
        // const body = JSON.stringify(req.body);
        // console.log(body);

        const {email, text} = req.body;

        const newFeedback = {
            id: Date.now().toString(),
            email,
            text
        }
        console.log("🚀 ~ file: feedBack.tsx ~ line 24 ~ handler ~ newFeedback", newFeedback)

        console.log(newFeedback);
        const pathname = path.join(process.cwd(), 'data', 'feedbach.json');
        const fileData = fs.readFileSync(pathname);
        const data = JSON.parse(fileData.toString());
        data.push(newFeedback);
        fs.writeFileSync(pathname, JSON.stringify(data));

        return res.status(201).json({message: 'create with sucess!', newFeedback});
    }
};

export default handler;
