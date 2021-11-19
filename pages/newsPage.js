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
    <div className='m-4 p-10 py-6 lg:py-2'>
     <div className='grid grid-cols-1 gap-2 relative w-8 pt-10'>
       {properties&&properties.map(property=>(
        <div className="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
        <img className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src={property.img} alt=""/>
        <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
           <div className="flex items-center">
              <h2 className="text-xl text-gray-800 font-medium mr-auto">{property.title}</h2>
              <p className="text-gray-800 font-semibold tracking-tighter">
              {property.data}
              </p>
           </div>
           <p className="text-sm text-gray-700 mt-4">
              {property.desc}
           </p>
        </div>
     </div>
   
       ))} 
     </div>
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