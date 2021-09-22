const express=require('express');
const morgan= require('morgan');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const postRoutes=require('./routes/post')

const app= express();

mongoose
    .connect(process.env.DATABASE, {})// can be few objects inside the curly brackets
    .then(()=> console.log("Database connected"))
    .catch((err)=>console.log("error: ", err));
//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// app.get('*',(req,res)=>{
//     res.json({
//         data: 'What the fuck'
//     });
// });

app.use('/api',postRoutes);

const port = process.env.port || 8000;
app.listen(port,()=> console.log(`Server is running on port ${port}`));