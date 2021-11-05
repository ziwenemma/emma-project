const {MongoClient}=require("mongodb")

client.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});
