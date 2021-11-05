require('dotenv').config();

const mongoose=require("mongoose");
const mongodb = require("mongodb");
const { Schema }=mongoose;

const uri = 'mongodb+srv://emmama:973051062@cluster0.aeqwf.mongodb.net/movie_db?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true,})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});

const movieSchema=new mongoose.Schema({title: {type:String, required:true},img:String,desc:String,date:{type:Date,default:Date.now}},{collection:"Movie"});
const Movie = mongoose.model('Movie',movieSchema);



exports.MovieModel = Movie;



