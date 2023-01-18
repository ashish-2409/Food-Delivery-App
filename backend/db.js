const mongoose = require('mongoose');
const mongouri=require('../src/passwords')// getting password for the mongodb atlas connection
const mongoDB = async()=>{
    await mongoose.connect(mongouri,{useNewUrlParser:true},(err,result)=>{
        if(err){
            console.log("----",err);
        }
        else{
        console.log("Connected successfully");
        }
    });
}
module.exports = mongoDB