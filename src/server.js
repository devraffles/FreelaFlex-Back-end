import express from "express";
import 'express-async-errors'
import cors from "cors";
import router from "./routes.js";

const app = express();


app.use(cors());

app.use(router);

app.use((error, req, res, next) => {
    if(error instanceof Error){
        return res.status(400).json({
            status: false,
            error: error.message
        })
    }

    return res.status(500).json({
        status: false,
        message: 'Internal Server Error.'
    })
})

app.listen(process.env.PORTA_SERVER, () => {
    console.log("Servidor OK em: http://localhost:5000")
});