import { Router } from "express";
import Post from '../models/postModel.js'
    

const router = Router();

router.route('/').get(async(req,res)=>{
    
    try{

        const posts = await Post.find({});

        res.status(200).json({
            success:true,
            data:posts
        })

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:error
        });
    }
});

router.route('/').post(async(req,res)=>{

    try{

        const {name,prompt,photo} = req.body;

        // const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo
        })

        res.status(201).json({
            success:true,
            data:newPost
        });
    }   
    catch(error){
        res.status(500).json({
            success:false,
            message:error
        });
    }
})

export default router;