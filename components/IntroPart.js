import Link from "next/link";

function IntroPart() {
  return (
    <div>
      <div className="relative pt-10 pb-10 pl-10 pr-10 flex flex-grow">
        <div className="w-full h-80 bg-back-img bg-no-repeat  bg-center border">
          <p className="text-5xl md:text-6xl text-white pt-20 text-center font-bold">
            Movie Museum
          </p>
          <div className="flex items-center justify-center pt-10">
            <button className="object-center rounded-lg px-5 py-2 bg-yellow-400 text-white hover:bg-yellow-600 hover:text-blue-100 duration-200">
              {"Let's Start"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPart;
