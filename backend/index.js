const express = require("express")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./Routes/users");
var bodyParser = require('body-parser');

require("dotenv").config();
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors());
mongoose.set('strictQuery', false); 

app.use("/",userRouter)
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI 

app.listen(port,()=>console.log(`port is running on ${port}`))

mongoose.connect(uri,{
    useNewUrlparser:true,
    useUnifiedTopology:true
}).then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err.message))

