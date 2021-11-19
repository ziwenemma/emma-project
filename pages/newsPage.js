import Head from 'next/head'
import { connectToDatabase } from '../lib/mongodb'
import Header from '/components/Header.js';

export default function NewsPage({ properties }) {
  
  console.log(properties);

  return (
    <div>
     <Head>
      <title>NewsPage</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      
    <div>
      <h1 className='text-5xl text-black text-center p-10'>News</h1>
    </div>    
     <div className='flex flex-row flex-wrap'>
       {properties&&properties.map(property=>(
        <div className='card mb-2'>
        <div className="card-body">
          <div className='h5 text-uppercase'>{property.title}</div>
          <p className='fw-light'>{property.desc}</p>
        </div>
        </div>
       ))}
     </div>
     </div>
  )
}

export async function getServerSideProps(context) {
  const {db} = await connectToDatabase()

  const data=await db.collection('Movie').find({}).limit(20).toArray();

  const properties=JSON.parse(JSON.stringify(data));

  console.log(properties);

  return {
    props: { properties:properties },
  }
}