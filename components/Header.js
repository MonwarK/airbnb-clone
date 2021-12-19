import { SearchIcon, GlobeAltIcon, MenuIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <header className="p-5 space-x-2 shadow-md flex justify-between lg:grid grid-cols-4 items-center bg-white top-0 sticky z-20">
      {/* Left */}
      <div>
        <img
          className="hidden md:block w-36 object-contain cursor-pointer"
          src="https://links.papareact.com/qd3"
          alt=""
        />
        <img
          className="md:hidden w-20 object-contain cursor-pointer"
          src="https://brandpalettes.com/wp-content/uploads/2021/08/airbnb_logo-274x300.png?ezimgfmt=rs:274x300/rscb1/ng:webp/ngcb1"
          alt=""
        />
      </div>

      {/* Middle */}
      <div className="col-span-2 w-full md:max-w-sm lg:max-w-full">
        <div className="p-1 shadow-md border rounded-full flex items-center w-full">
          <input
            className="outline-none bg-transparent flex-1 font-medium placeholder:text-gray-600 ml-3"
            type="text"
            placeholder="Start your search"
          />
          <button className="bg-red-400 hover:bg-red-500 duration-150 text-white rounded-full">
            <SearchIcon className="w-9 p-2" />
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="hidden lg:flex space-x-5 font-semibold items-center justify-end">
        <p className="cursor-pointer">Become a host</p>
        <GlobeAltIcon className="w-6 cursor-pointer" />
        <div className="flex items-center border-2 rounded-full p-1 cursor-pointer hover:shadow-md duration-150">
          <MenuIcon className="w-6 mx-2" />
          <UserCircleIcon className="w-10" />
        </div>
      </div>

      <MenuIcon className="w-10 h-10 cursor-pointer lg:hidden" />
    </header>
  )
}
