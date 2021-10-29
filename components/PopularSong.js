import Image from "next/image";

function PopularSong({image,title,singer}) {
  return (
    <div className=''>
      
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <Image className='top-10 w-24 h-24 object-contain' src={image} width={300} height={300}/>
      <p className="text-base text-left font-medium top-50 pb-8">{title}</p>
      <div className='text-sm leading-7 text-gray-400 pb-4'>{singer}</div>
      </div>
    </div>
  );
}

export default PopularSong;
