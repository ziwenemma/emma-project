import Head from 'next/head';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import Movies from '../components/Movies';
import IntroPart from '../components/IntroPart';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div> 
      <div className="w-full h-full bg-no-repeat bg-cover bg-left bg-fixed bg-back-img bg-opacity-10">
      <Head>
        <title>EmmaProject</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>  
      <IntroPart/>
      <Movies/>
      <MainPage/>
      <Footer/>
    </div>
  </div>
  );
}
