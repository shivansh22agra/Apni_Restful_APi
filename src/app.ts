import express, { Request, Response, } from "express";
import dotenv from "dotenv";
import { router } from "./routes/Routes";
import mongoose, { ConnectOptions } from "mongoose";
dotenv.config();

const app = express()
//for post request 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_DB as string,
     { useNewUrlParser: true, useUnifiedTopology: true, } as ConnectOptions,
    () => { console.log("connected to database") }
);
//mongoose.connect(process.env.MONGO_DB as string,
//     { 
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true,


//     },() => {
//         console.log("connected to db");
//     }

//  );

// app.get('/',(req:Request,res:Response,)=>{
//     res.json({
//         message: "Api is working",
//     });

// });

// app.get('/about',(req:Request,res:Response,)=>{
//     res.json({
//         data: "about api path working"
//     })

// });
app.use("/", router);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});