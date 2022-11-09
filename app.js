const express=require('express');



const app=express();



app.use(express.json())


const connectDB=require('./models/database')


connectDB();


//import routes


const event=require("./routes/eventroutes");

app.use("/api/v1",event);





//server configurations


app.listen(3000,()=>{
    console.log(`server is running at http://localhost:3000`);
})