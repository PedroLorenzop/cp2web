import { useState } from "react";
import {Button, Link} from "react-scroll"
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"

const Nav = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const content = <>
        <div className="lg:hideen block absolute top-16 w-full lef-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link  spy={true} smooth={true} to="Home">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover: rounded">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="Sobre">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover: rounded">Sobre</li>
                </Link>
                <Link spy={true} smooth={true}to="Tecnologias">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover: rounded">Tecnologias</li>
                </Link>
                <Link spy={true} smooth={true}to="Projetos">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover: rounded">Projetos</li>
                </Link>
                <Link spy={true} smooth={true}to="Contatos">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover: rounded">Contato</li>
                </Link>
            </ul>
        </div>
    </>
    return (
      <nav>
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
            <div className="flex items-center flex-1">
                <span className="text-3xl font-bold">Pedro</span>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link spy={true} smooth={true} to="Home">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Sobre">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Sobre</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Tecnologias">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Tecnologias</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projetos">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Projetos</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contatos">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contato</li>
                        </Link>
                    </ul>
                         </div>
            </div>
            <div> 
                {click && content}
            </div>
            <Button className="block sm:hidden transition" onClick={handleClick}>
                {click ? <FaTimes/> : <CiMenuFries/> }
            </Button>
        </div>
      </nav>
    );
  }
  
  export default Nav;