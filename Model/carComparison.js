const mongoose=require("mongoose");

const compareSchema=new mongoose.Schema({
    groups:[{
        pairs:[{
            item1:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Car",
                required:true
            },
            item2:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Car",
                required:true
            }
        }]
    }]
})

const CompareCar=mongoose.model("CompareCar",compareSchema);
module.exports=CompareCar