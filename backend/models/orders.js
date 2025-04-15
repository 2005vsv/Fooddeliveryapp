const mongoose=require("mongoose");

const Ordersmodel=mongoose.model("orders",{
    items:{type:Array,required:true},
    orderbyuserid:{type:String,required:true},
    totalprice:{type:Number,required:true}
})
module.exports=Ordersmodel;