const mongoose = require('mongoose');



const connectDB=()=>{
    mongoose.connect('mongodb://localhost:27017/Todo-List');
    const db= mongoose.connection

db.on('error',()=>{
    console.log("Error in connecting to Database");
})

db.once('open',()=>{
    console.log("Connected to database");
})
}
module.exports=connectDB;