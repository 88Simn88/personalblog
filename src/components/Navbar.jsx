import { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { HiMenuAlt4 } from "react-icons/hi"
import { Link } from "react-router-dom"

const Navbar = () => {
  
    const [open, setOpen] = useState(false)
    

 

    let Links = [
        { name: "Pianista", link: "pianista" },
        { name: "Compositor", link: "compositor" },
        { name: "Recursos", link: "recursos"}
      /*   { name: "Escritos", link: "escritos" },
        { name: "Contacto", link: "contacto" } */
    ]

    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-10 transition-all duration-300 bg-black">
            <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
                    <Link to={"/"} className="flex gap">
                        <h2 className="ml-5 pt-2 md:pt-1 font-sans md:text-3xl text-2xl text-[#165359] hover:text-white">
                            Simón Sánchez
                        </h2>
                    </Link>
                </div>

                <div
                    onClick={() => setOpen(!open)} 
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
                >
                    { open ? <AiOutlineClose fontSize={28} /> : <HiMenuAlt4 fontSize={28} /> }
                </div>

                <ul className={`mt-0 pt-5 md:pt-1 md:flex md:items-center md:pb-0 px-12 absolute md:static rounded md:z-auto z-[-1] left-0 w-2/3 md:w-auto md:pl-0 pl-9 transition-all duration-500 bg-black ease-in ${open ? "top-17" : "top-[-490px]"}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7" onClick={() => setOpen(!open)}>
                                <Link className="text-[#AFD7E3] hover:text-white p-1 h-2 w-4/5" to={`/${link.link}`}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
