import express from "express";
import { Comment } from "../../../interfaces/envent";

const handler = (req: express.Request, res: express.Response) => {
    const { eventId } = req.query;

    if (req.method === "POST") {
        //add server side validation
        const { email, name, text } = req.body;

        if (
            !email ||
            !email.includes("@") ||
            !name ||
            !text ||
            name.trim() === "" ||
            text.trim() === ""
        ) {
            res.status(422).json({ message: "Invalid input. " });
            return;
        }

        const newComment = {
            id: new Date().toString(),
            email,
            name,
            text,
        };
        console.log(newComment);
        res.status(201).json({comment: newComment});
    }

    if (req.method === "GET") {
        const dummy: Comment[] = [
            {
                id: "c2",
                email: "tx@fdzz.fr",
                name: "toto",
                text: "very",
            },
            {
                id: "c4",
                email: "tx@fdzz.fr",
                name: "tyty",
                text: "very bad !!",
            },
        ];

        res.status(200).json({comments : dummy});
    }
};

export default handler;
