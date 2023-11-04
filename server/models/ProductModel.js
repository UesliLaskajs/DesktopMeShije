const mongoose=require("mongoose")

const ProductSchema=new mongoose.Schema({
    food_name:{
        type:String,
        required:[true,"The food name is required"]
    },
    cuisine:{
        type:String,
        required:[true,"The cuisine is required"]
    },
    instructions:{
        type:String,
        required:[true,"Add some instructions"]
    },
    food_photo:{
        type:String,
        required:[true,'Image Url is Required']
    },
    food_video:{
        type:String,
        required:[true,"Video Url is Required"]
    }
})

module.exports=mongoose.model("Food",ProductSchema)