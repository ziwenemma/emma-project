const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const movieSchema=new mongoose.Schema({
  title: {
    type:String, 
    required:true
  },
    img:String,
    desc:String,
    date:{
    type:Date,
    default:Date.now}
  },
    {collection:"Movie"}
    );

const Movie=mongoose.model('movie',movieSchema);
module.exports=Movie;