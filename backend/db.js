const mongoose = require('mongoose');
const {mongouri}=require('../src/passwords')// getting password for the mongodb atlas connection
const mongoDB = async()=>{
    await mongoose.connect(mongouri,{useNewUrlParser:true},async(err,result)=>{
        if(err){
            console.log("----",err);
        }
        else{
        console.log("Connected successfully");
        const fetched_date = await mongoose.connection.db.collection("food_items");
        fetched_date.find({}).toArray(async function(err,data){
            
            const foodCategory = await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function (err,cdata){

                if(err){
                    console.log(err);
                }
                else{
                    global.food_items = data;
                    global.foodCategory = cdata;
                    // console.log(data);
                }
            }
            )
        })
        }
    });
}
module.exports = mongoDB