import { MongoClient } from 'mongodb'
const uri = process.env.MONGODB_URI
const {MONGODB_URI,MONGODB_DB}=process.env


if (!MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (!MONGODB_DB) {
  throw new Error('Please add your Mongo URI to .env.local')
}

let cached=global.mongo

if(!cached){
  cached=global.mongo={conn:null,promise:null}
}


export async function connectToDatabase(){
  if(cached.conn){
    return cached.conn
  }

  if(!cached.promise){
    const opts={
      useNewUrlParser:true,
      useUnifiedTopology:true,
    }
    cached.promise= MongoClient.connect(MONGODB_URI,opts).then((client)=>{
      return {
        client,
        db:client.db(MONGODB_DB),
      }
    })
  }
  cached.conn=await cached.promise 
  return cached.conn
}