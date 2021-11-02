import {
  CollectionIcon,
  HomeIcon,
  PhotographIcon,
  UserIcon
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";



function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-0 justify-between items-center'>  
    <Image
      className="object-fill justify-start" 
      src="/logo.png" 
      width={100} height={80}/>

      <div className="flex flex-grow  justify-start max-w-3xl  pt-10">
      <Link href="/"><a><HeaderItem title="HOME" Icon={HomeIcon}/></a></Link>
        <Link href="/posts/moviepost"><a><HeaderItem title="
        MOVIES" Icon={PhotographIcon}
        /></a></Link>
        <HeaderItem title="NEWS" Icon={CollectionIcon}/>
        <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
      </div>

      <div className="flex flex-grow  justify-end pt-10">
        <HeaderItem title="Instagram" Icon={CollectionIcon}/>
      <HeaderItem title="MOVIES" Icon={PhotographIcon}/>
      </div>
    
    </header>
  )
}

export default Header
