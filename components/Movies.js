import MovieLists from "./MovieLists"


function Movies() {
  return (
   
   <div className='bg-[#8a8c8e] bg-opacity-70 m-4 p-10 py-6 lg:py-12'> 
    <h1 className='text-4xl font-semibold text-center text-white'>Oct/Nov Coming</h1>
   
   <div className="grid grid-cols-3 gap-2 relative pt-10">
    <MovieLists image='/film007.png' title="007:No time to die" desc="No Time to Die is a 2021 spy film and the twenty-fifth in the James Bond series produced by Eon Productions. It stars Daniel Craig in his fifth and final outing as the fictional British MI6 agent James Bond. "></MovieLists>
    <MovieLists title="Army of Thieves" image='/new2.png'desc="Army of Thieves is a 2021 heist comedy film directed by Matthias Schweighöfer from a screenplay by Shay Hatten, based on a story he wrote with Zack Snyder. A prequel to Army of the Dead, it is the second installment in the Army of the Dead franchise;"></MovieLists>
    <MovieLists title="Ultimate Spider-Man: Origins" image='/newMovie2.png' desc="Miles Morales, A 15 year old teenager from Brooklyn, New Yorks discovers the genetically altered-radioactive spider that bites him. He learns and strives to become the new Spider-Man after the original wallcrawler Peter Parker dies in the hands of Norman Osborn."></MovieLists>
    </div>
    </div>
  )
}

export default Movies
