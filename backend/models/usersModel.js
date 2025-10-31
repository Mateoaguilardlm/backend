const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    nombre:{
        type:String,
        required :[true, 'porfavor teclea tu nombre']
    },
    email:{
        type:String,
        required :[true, 'porfavor teclea tu mail'],
        unique:true
    },
    password:{
        type:String,
        required :[true, 'porfavor teclea tu password']
    },
    esAdmin:{
        type:Boolean,
        default: false
    }
})
module.exports=mongoose.model('User', userSchema)