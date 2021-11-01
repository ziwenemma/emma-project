import Image from "next/image";

function MovieLists({image,title,desc}) {
  return (
    <div className=''>
      
       <div className="top-10 w-120 h-220 object-contain ">
      <Image src={image} width={270} height={300}/></div>
      <p className="text-xl font-medium top-50 pb-3 text-white text-center">{title}</p>
      <div className='text-sm leading-2 text-gray-100 text-center pb-2 pt-10'>{desc}</div>
      </div>
  );
}

export default MovieLists;
