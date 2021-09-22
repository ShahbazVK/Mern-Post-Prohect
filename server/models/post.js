const mongoose = require('mongoose');
const {ObjectId}=mongoose.Schema;

const postSchema= new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        min: 3,
        max: 160,
        required: true
    },
    slug:{
        type: String,
        unique: true,
        index: true,
        lowercase: true
    },
    content:{
        type: {},
        min: 20,
        max: 200000,
        required: true
    },
    user:{
        type: String,
        default: 'Admin'
    }
}, {timestamp: true});

module.exports= mongoose.model('Post', postSchema);