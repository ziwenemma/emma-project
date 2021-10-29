import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
CollectionIcon,
HomeIcon,
PhotographIcon,
UserIcon,}from "@heroicons/react/outline";

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-6 justify-between items-center'>
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon}/>
        <HeaderItem title="
        PHOTOS" Icon={PhotographIcon}/>
        <HeaderItem title="VEDIO" Icon={CollectionIcon}/>
        <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
      </div>
      <Image
      className="object-contain" 
      src="/logo.png" 
      width={200} height={100}/>
    </header>
  )
}

export default Header
