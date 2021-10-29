import Image from "next/image";


function MainPage() {
  return (
    <div className='bg-[#464547]'>
    <div className='sm:flex-row m-6 pt-10'>
      <h1 className='text-4xl text-center text-white font-mono '>LASTEST IN OCT</h1>
    </div>
    <div className='items-center p-5 grid grid-cols-3'>
      <Image src='/justin.png'
      className="object-contain"
          alt="faceImage"
          width="300"
          height="400"
          >
      </Image>
      <Image src='/easyonme.png'
      className="object-contain"
          alt="faceImage2"
          width="300"
          height="400"
          >
      </Image>
      <Image src='/ed.png'
      className="object-contain"
          alt="faceImage3"
          width="300"
          height="400"
          >
      </Image>
    </div> 
    </div>
  
  )
}

export default MainPage;

