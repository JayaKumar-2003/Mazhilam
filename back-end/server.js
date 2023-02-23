import mongoose from "mongoose";
import dotenv from 'dotenv';
import  express  from "express";
import userRouter from './routes/userRoutes.js';
import seedRouter from "./routes/seedRouter.js";
dotenv.config();


mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err.message);
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use('/api/seed',seedRouter);
app.use('/api/users',userRouter);

// app.use((err,req,res,next)=> {
//     res.status(500).send({ message:err.message});
// });
const port = process.env.PORT || 5000;

app.listen(port,()=> {
    console.log(`server at http://localhost:${port}`);
});