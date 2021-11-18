require('dotenv').config();

const mongoose=require("mongoose");
const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;


const uri = 'mongodb+srv://emmama:973051062@cluster0.aeqwf.mongodb.net/movie_db?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true,})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});

const movieSchema=new mongoose.Schema({title: {type:String, required:true},img:String,desc:String,date:{type:Date,default:Date.now}},{collection:"Movie"});
const Movie = mongoose.model('Movie',movieSchema);

app.get('/Movie', function(req, res,next) {
  mongoose.connection.uri.listConnections().toArray().then(collection=>{});
  next();
  });

app.listen(4000,()=>{
  console.log("server started at port 3000")
});





