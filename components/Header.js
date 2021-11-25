import { AiOutlineHome, AiOutlineInstagram } from "react-icons/ai";
import { BsFilm, BsNewspaper } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-0 justify-between items-center">
      <Image
        className="object-fill justify-start"
        src="/logo.png"
        width={100}
        height={80}
      />

      <div className="flex flex-grow  text-white justify-start max-w-3xl  pt-10">
        <Link href="/">
          <a>
            <HeaderItem title="HOME" Icon={AiOutlineHome} />
          </a>
        </Link>
        <Link href="/posts/moviepost">
          <a>
            <HeaderItem
              title="
        MOVIES"
              Icon={BsFilm}
            />
          </a>
        </Link>
        <Link href="/newsPage">
          <a>
            <HeaderItem title="NEWS" Icon={BsNewspaper} />
          </a>
        </Link>
      </div>

      <div className="flex flex-grow text-white justify-end pt-10">
        <Link href="/newsPage">
          <a>
            <HeaderItem title="Vedio" Icon={AiOutlineInstagram} />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
