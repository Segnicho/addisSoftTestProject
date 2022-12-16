import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
       
    },
    lastname:{
        type:String,
        
    },
    password:{
        type:String,
    },
    gender:{
        type:String,
        required: true,
    },
    age:{
        type:Number,
    },
    height:{
        type:Number,
    },
    
},{
    timestamps:true
});
export default mongoose.model("User", UserSchema);