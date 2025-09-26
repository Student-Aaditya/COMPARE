const express=require("express");
const app=express();
const port=2056
const main=require("./DataBase/main.js");
const routes=require("./Routes/carRoutes.js");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",routes);

main();

app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})