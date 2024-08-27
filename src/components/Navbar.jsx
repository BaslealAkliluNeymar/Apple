import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"
const Navbar = () => {
  return (
    <header className="w-full sm:px-10 py-5 flex justify-between items-center max-sm:px-10">
        <nav className="flex screen-max-width w-full">
            <img src={appleImg} alt="" width={14} height={18}/>

            <div className="flex flex-1 justify-center max-sm:hidden">
                {
                    navLists.map((item) => (
                        <div className="text-sm px-5 cursor-pointer text-gray hover:text-white transition-all">
                            {item}
                        </div>
                    ))
                }
            </div>

            <div className="flex gap-7 max-sm:justify-end max-sm:flex-1">
                <img src={searchImg} alt="search" width={14} height={18}/>
                <img src={bagImg} alt="bag" width={14} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar