import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import connectarDB from '../../lib/dbConnect';
import Footer from '/components/Footer.js';
import Header from '/components/Header.js';
import Movie from '../../lib/dbPage';
import React from 'react';
import ReactDOM from 'react-dom';



class NewsList extends React.Component(){
  render(){
  return (
    <div> 
    <div className="w-full h-full bg-no-repeat bg-cover bg-left bg-fixed bg-back-img bg-opacity-10">
    <Head>
      <title>MoviePage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <div>
      <h1 className='text-5xl text-black text-center p-10'>News</h1>
    </div>
</div>
<main className='container'>
  <h1>MoviesNews</h1>
  {
    movies.map((_id,title,img,desc,data)=>(
      <div className='card mb-2' key={_id}>
        <div className="card-body">
          <div className='h5 text-uppercase'>{title}</div>
          <p className='fw-light'>{desc}</p>
        </div>
        </div>
    ))
  }
  </main>

  <Footer/>
  </div>
);
} 
}
export default NewsList;

export async function getServerSideProps(){
  try{
    await connectarDB()
    const res=await Movie.find({})

    const movies=res.map(doc=>{
      const movie=doc.toObject()
      movie._id=`$(movie._id)`
      return movie
    })
    return{props:{movies}}

  }catch(error){
    console.log(error)
  }
}

