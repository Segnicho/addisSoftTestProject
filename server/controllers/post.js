import Post from '../models/Post.js'
import mongoose from 'mongoose';

// Posting something
export const createPost = async (req, res)=>{
    const newPost = new Post(req.body);
    try {

        const savedPost = await newPost.save()
        res.status(201).json(savedPost);
        
    } catch (err) {
        console.log(err);
    }
}

// gettign all the posts
export const getPosts = async (req, res) =>{
    try {
        const allPosts = await Post.find();
        res.status(200).json(allPosts)
    } catch (error) {
        res.status(994)
        
    }
}
export const deletePost = async (req, res)=>{
    try {
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json("The post has been deleted!");
    } catch (err) {
        console.log(err)
    }
}
export const updatePost = async (req, res)=>{
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,{
                $set:req.body,
            },{
                new:true
            }
        );
            res.status(200).json(updatedPost);
        }
        catch (err) {
        res.status(500).json(err);
        
    }

}





        
