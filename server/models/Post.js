import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
       
    },
    
    description:{
        type:String,
        
    },

},{
    timestamps:true
});
export default mongoose.model("Post", PostSchema);