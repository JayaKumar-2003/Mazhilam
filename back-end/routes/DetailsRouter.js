import express from "express";
import DetailsModel from "../models/DetailsModels.js";
import expressAsyncHandler from "express-async-handler";

const  DetailsRouter = express.Router();

DetailsRouter.get('/',async(req,res)=> {
    const details = await DetailsModel.find();
    res.send(details);
});

DetailsRouter.post(
    '/addlist',
    expressAsyncHandler(async(req,res)=> {
        const NewDetails = new DetailsModel(
            {
                name:req.body.name,
                number:req.body.number,
                Address:req.body.address,
                Pending:req.body.pending,
                History:{
                    Amount:req.body.amount,
                    Description:req.body.description,
                }
                
            }
        );
        const details = await NewDetails.save();
        res.send({
            name:details.name,
            number:details.number,
            Address:details.Address,
            Pending:details.Pending,
              History :{
             Amount:details.Amount,
            Description:details.Description,
           }

        });
        console.log(details);
    })
);
export default DetailsRouter;