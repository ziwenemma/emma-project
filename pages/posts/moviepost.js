import Head from 'next/head';
import Footer from '/components/Footer.js';
import Header from '/components/Header.js';


export function MoviePage(){
  return (
    <div> 
    <div className="w-full h-full bg-no-repeat bg-cover bg-left bg-fixed bg-back-img bg-opacity-10">
    <Head>
      <title>MoviePage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>

  <Footer/>
  </div>
</div>
);
} 


export default MoviePage;
