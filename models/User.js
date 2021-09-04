const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    dateCreated:{
        type:Date,
        default:Date.now()
    },
    favoriteOrders:{
        type:Array,
    },
    historyOrders:{
        type:Array
    }

})
module.exports=mongoose.model('Users', userSchema)