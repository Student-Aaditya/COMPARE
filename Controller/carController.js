const Car=require("../Model/Car.js");
const CompareCar=require("../Model/carComparison.js");

const carController={
    carData:async(req,res)=>{

        const carData=new Car(req.body);

        await carData.save();

        res.status(201).json({msg:carData});
    },
    createCar:async(req,res)=>{
        try{
        const {groups}=req.body;
        if(!groups){
            return res.status(404).json({success:false,msg:"Please fill all required data"});
        }
        const carCompareData=new CompareCar({groups});
        await carCompareData.save();
        res.status(201).json({msg:carCompareData});
    }catch(err){
        console.log(err);
    }
    },
    getCarComaprisonById:async(req,res)=>{
        const {id}=req.params;
        const data=await CompareCar.findById(id).populate({
            path:"groups.pairs.item1 groups.pairs.item2",
            select:"select brand name"
        });
        if(!data){
            res.status(200).json({success:false,msg:"Comparison not found"});
        }
        res.status(200).json({success:true,data:data.toObject()});
    },

      deleteData:async(req,res)=>{
        const {id}=req.params;
        const data=await CompareCar.findByIdAndDelete(id);

        if(!data){
            return res.status(404).json({success:false,msg:"Comparison not found"});
        }
            return res.status(200).json({success:true,msg:"Comparison delete successfully"});
    }
}
module.exports=carController;


