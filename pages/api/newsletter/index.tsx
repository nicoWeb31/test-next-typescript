import express from "express";

const handler = (req : express.Request, res : express.Response) => {
if(req.method === "POST") {
    const {email}  = req.body;

    if(!email || !email.includes('@')) {
        return res.status(422).json({message:'invalid email address'}) ;
    }

    console.log(email)
    res.status(201).json({message:'ok'})
}

}



export default handler;