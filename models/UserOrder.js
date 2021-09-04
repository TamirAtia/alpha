const mongoose = require('mongoose');

const userOrderSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    products:{
        type: Array
    },
    email:{
        type:String,
        required:true
    },

})
module.exports=mongoose.model('UserOrder', userOrderSchema)