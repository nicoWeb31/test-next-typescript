import express from "express";
import { connect, getAllcollections } from "../../../mongoDB/connect";

const handler = async (req: express.Request, res: express.Response) => {
    const { eventId } = req.query;

    let connectMongo;

    try {
        connectMongo = await connect();
    } catch (error) {
        res.status(500).json({ message: "connection to Mongo failed" });

        return;
    }

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
            connectMongo.close();
            return;
        }

        const newComment: any = {
            // _id: "",
            email,
            name,
            text,
            eventId,
        };

        try {
            const db = connectMongo.db();

            const result = await db
                .collection("comments")
                .insertOne(newComment);
            console.log(result);
            newComment._id = result.insertedId;
            res.status(201).json({ comment: newComment });
        } catch (error) {
            res.status(500).json({
                message:
                    "connect to mongodb failed , impossible to insert document !!",
            });
        }
    }

    if (req.method === "GET") {
        try {
            const documents = await getAllcollections(
                connectMongo,
                "comments",
                { _id: -1 }
            );

            res.status(200).json({ comments: documents });
            connectMongo?.close();
        } catch (error) {
            res.status(500).json({
                message:
                    "connect to mongodb failed, impossible to fetch data !!",
            });
        }
    }

    connectMongo.close();
};

export default handler;
