import Head from 'next/head'
import Header from '../components/Header'
import MainPage from '../components/MainPage';
import PopularList from '../components/PopularList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>EmmaProject</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <MainPage/>

      <PopularList/>
    </div>
  );
}
