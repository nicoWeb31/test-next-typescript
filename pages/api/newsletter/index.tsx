import express from "express";
import { connect }  from '../../../mongoDB/connect';

const handler = async(req : express.Request, res : express.Response) => {
if(req.method === "POST") {
    const {email}  = req.body;

    if(!email || !email.includes('@')) {
        return res.status(422).json({message:'invalid email address'}) ;
    }

    const connectBb = await connect();
    const db = connectBb.db();
    await  db.collection('email').insertOne({emails: email});
    connectBb.close();


    console.log(email)
    res.status(201).json({message:'ok'})
}

}



export default handler;