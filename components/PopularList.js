import PopularSong from "./PopularSong"


function PopularList() {
  return (
    <div className='bg-[#8a8c8e] m-2 p-10 py-6 lg:py-12'> 
    <h1 className='text-4xl font-semibold text-center text-white'>POPULAR SONG 2021</h1>
   
    <PopularSong  image='/ed.png' title="Stay" singer="Justin Biber"></PopularSong>
    <PopularSong title="Stay" image='/justin.png'singer="Justin Biber"></PopularSong>
    <PopularSong title="Stay" image='/justin.png' singer="Justin Biber"></PopularSong>
    </div>
  )
}

export default PopularList
