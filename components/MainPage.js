

function MainPage() {
  return (
    
      <div className='bg-gradient-to-r from-[#c99979] via-[#d1c7b7] to-[#c1a173] m-3 bg-opacity-60'>
      <h1 className='text-3xl border-2 border-black text-center font-extrabold'>FILM</h1>

      <div className='bg-white bg-opacity-80 divide-y divide-black divide-solid'>
      <div className='grid grid-cols-2 gap-3 m-2 justify-items-center'>
      <p className='text-4xl font-black text-center pt-10 text-black'>What's the film?<p className='text-sm font-normal text-black text-center pt-10'>A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. These images are generally accompanied by sound, and more rarely, other sensory stimulations.[1] The word "cinema", short for cinematography, is often used to refer to filmmaking and the film industry, and to the art form that is the result of it.</p></p>
      
      <div className='pt-10'><img src='/movielogo.png'
      alt=''></img>
      </div>
      </div>
     
      <div className='justify-items-center pt-2 grid grid-cols-2 gap-3 m-2 pb-5'>
      <img src='/moviecat.png' alt=''></img>
      <p className='text-4xl font-black text-center pt-10 text-black'>Influence
      <p className='font-normal text-balck text-center text-sm'>Sitcoms and comedy shows make us laugh, psychological thrillers help us see the world from new perspectives, and historical films help us understand where we've come from as a people. Every video and every film can reflect society and transform opinions.Movies Shape Culture Just as movies reflect the anxieties, beliefs, and values of the cultures that produce them, they also help to shape and solidify a culture's beliefs. Sometimes the influence is trivial, as in the case of fashion trends or figures of speech</p></p>
      </div>
      
      </div>
      </div>

  
  )
}

export default MainPage;

