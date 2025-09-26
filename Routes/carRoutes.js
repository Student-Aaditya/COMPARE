const express=require("express");
const router=express.Router();
const carController=require("../Controller/carController.js");

router.post("/car",carController.carData);
router.post("/car/compare",carController.createCar);
router.get("/car/:id",carController.getCarComaprisonById);
router.delete("/car/:id",carController.deleteData);
module.exports=router