const express = require('express');
const app = express();
const drill = require('./drill');

const bodyParser= require('body-parser');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


// app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Routes
app.get('/',async (req,res)=>{
    // res.send("Hello! I'm a chatbot! this is hosted on your PC ");
    try{
        const result = await drill.func();
        console.log("result from Express:",result);
        res.send(result);
        console.log("lammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
        drill.obj.length == 0;
        for(var member in drill.obj) delete drill.obj[member];//Super IMPOERTANT, No Residue whatsoever
        // drill.finalResult.length= 0;
    }catch(e){
        console.log(e)
    }
    // console.log("process.env folder: ",process.env.GOOGLE);


});



const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>console.log(`listening to port ${PORT}`));
