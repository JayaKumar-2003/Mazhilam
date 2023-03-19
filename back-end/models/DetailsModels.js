import mongoose from "mongoose";

const DetailSchema = new mongoose.Schema(
    {
        name:{ type : String , required: true},
        number :{type :Number , required :true, unique : true},
        Address : {type : String , required :true},
        Pending : {type :Number , required :true},
        History : {
                Description :{type: String , required :true},
                Amount :{type: Number , required :true},
         },
    },
    {
        timestamps:true,
    }
   
);
const details = mongoose.model('Details',DetailSchema);
export default details;