import express from 'express';
import data from '../data.js';
import details from '../models/DetailsModels.js';
import User from '../models/userModel.js';
const seedRouter = express.Router();

seedRouter.get('/',async(req,res)=> {
    await details.remove({});
    const createdetails =await details.insertMany(data.details);
    res.send({createdetails});
    console.log('inserted');
    await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res.send({createdUser});
});
export default seedRouter;