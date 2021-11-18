import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { playlist } from '../../components/MoviesPage';
import Footer from '/components/Footer.js';
import Header from '/components/Header.js';



export function MoviePage({playlistLists}){
  return (
    <div> 
    <div className="w-full h-full bg-no-repeat bg-cover bg-left bg-fixed bg-back-img bg-opacity-10">
    <Head>
      <title>MoviePage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <div>
      <h1 className='text-5xl text-black text-center p-10'>Movies</h1>
       <div className='p-10 grid grid-cols-2 gap-3 mx-auto'>
         {playlistLists.map(playlistLists =>(
           <div className='rounded-lg overflow-hidden shadow-lg justify-center items-center bg-white bg-opacity-90 p-10' key={playlistLists.id}>
          <div className='w-full'>
             <img src={playlistLists.image} alt=''width='300' height='200'/></div>
          <div className='w-full p-4 justify-start flex flex-col'>
           <h2 className='border-b-2 text-black font-bold text-3xl'>{playlistLists.title}</h2>
           <p className='text-black my-3 leading-normal text-sm'>{playlistLists.desc}</p>
           <p className='text-[#1E90FF] text-2xl'>{playlistLists.rating}</p>
          </div>
        <div className="pt-4 pb-2">
        <span className="inline-block bg-blue-500 rounded-full  py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">{playlistLists.info.date}</span>
        <span className="inline-block bg-pruple-400 bg-opacity-60 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{playlistLists.info.category}</span>
      </div>
           </div>
         ))}
    </div>
</div>
  <Footer/>
  </div>
</div>
);
} 

export async function getStaticProps() {
  return {
    props: {
      playlistLists: playlist,
    },
  }
}
export default MoviePage;