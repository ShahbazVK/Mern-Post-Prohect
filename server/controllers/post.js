const Post = require('../models/post');
const slugify = require('slugify');

exports.create = (req, res) => {
    // res.json({
    //     data:"You are here now"
    // })
    // console.log(req.body);
    const { title, content, user } = req.body;
    const slug = slugify(title);
    if (!title || !content) {
        res.status(400).json({
            error: "Title and Content is required"
        });
    }
    //     else{
    //     res.json({
    //         msg: "See your server console"
    //     })
    //     console.log(req.body);
    // }



    
    //// uploading post

    Post.create({ title, content, user, slug }, (err, post) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                err: "Duplicatee ttitle"
            })
        }
        res.json(post);
    })
}

exports.list=(req,res)=>{
    Post.find({}).exec((err,posts)=>{
     if (err) console.log(err)
     res.json(posts);
    })
}

exports.read=(req,res)=>{
    const {slug}=req.params;
    Post.findOne({slug}).exec((err,post)=>{
     if (err) console.log(err)
     res.json(post);
    })
}

exports.update=(req, res)=>{
    const {slug}=req.params;
    const {title, content, user}=req.body;
    Post.findOneAndUpdate({slug}, {title, content, user}, {new: true}).exec((err,post)=>{
        if (err) console.log(err)
        res.json(post)
    })
}

exports.remove=(req,res)=>{
    const {slug}=req.params;
    Post.findOneAndRemove({slug}).exec((err,post)=>{
     if (err) console.log(err)
     res.json("post deleted");
    })
}