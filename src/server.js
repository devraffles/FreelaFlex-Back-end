import express from "express";
import 'express-async-errors'
import cors from "cors";
import router from "./routes.js";
import MyError from "./error/myError.js";

const app = express();

app.use(express.json())

app.use(cors());

app.use(router);

app.use((error, req, res, next) => {
    if(error instanceof MyError){
        return res.status(error.statusCode).json({
            status: false,
            error: error.message
        });
    }

    return res.status(500).json({
        status: false,
        message: 'Internal Server Error.'
    });
})

app.listen(process.env.PORTA_SERVER, () => {
    console.log("Servidor OK em: http://freelaflexbackend.vercel.app")
});
