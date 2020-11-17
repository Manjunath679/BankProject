const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://manjunath:msmv1234@cluster0.b6x1z.mongodb.net/imdb1?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("success"))
.catch((err)=>console.log(err));
 const playlistSchema  = new mongoose.Schema({
     Name:String,
     Emailid:String,
     TotalAmount:Number
 })
 const imdata1 = mongoose.model("imdata1",playlistSchema);
 module.exports  = imdata1;
 
