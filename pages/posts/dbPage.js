require('dotenv').config();

const mongoose=require("mongoose");
const mongodb = require("mongodb");

const uri = 'mongodb+srv://emmama:973051062@cluster0.aeqwf.mongodb.net/movie_list?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});
