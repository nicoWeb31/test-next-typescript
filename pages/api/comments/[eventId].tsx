import express from "express";
import { MongoClient } from "mongodb";
import { Comment } from "../../../interfaces/envent";
import { connect } from "../../../mongoDB/connect";

const handler = async (req: express.Request, res: express.Response) => {
    const { eventId } = req.query;

    let connectMongo;

    try {
        connectMongo = await connect();
    } catch (error) {
        res.status(500).json({ message: 'connection to Mongo failed' });
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
            return;
        }

        const newComment = {
            id: "",
            email,
            name,
            text,
            eventId,
        };

        try {
            const db = connectMongo && connectMongo.db();
            if (db) {
                const result = await db
                    .collection("comments")
                    .insertOne(newComment);
                console.log(result);

                //add id in Response
                newComment.id = result.insertedId;

                res.status(201).json({ comment: newComment });
                connectMongo?.close();
            }
        } catch (error) {
            res.status(500).json({ message: 'connect to mongodb failed , impossible to insert document !!' });
        }
    }

    if (req.method === "GET") {
        try {
            const db = connectMongo?.db();
            if (db) {
                const documents = await db
                    .collection("comments")
                    .find()
                    .sort({ _id: -1 })
                    .toArray();

                res.status(200).json({ comments: documents });
                connectMongo?.close();
            }
        } catch (error) {
            res.status(500).json({ message: 'connect to mongodb failed, impossible to fetch data !!' });
        }
    }

    connectMongo?.close();
};

export default handler;
