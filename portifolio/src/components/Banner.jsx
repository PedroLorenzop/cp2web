import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import img from "../assets/perfil2.svg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Banner = () => {
  useEffect(() =>{
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
  
    })
  }, [1000])
  return (
    <div className="lg:px-56 px-10 lg:py-0 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
            <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-8 leading-normal uppercase">Bem vindo ao meu <span className="text-fuchsia-600">Portifolio</span></h1>
            <div className="flex mt-8 gap-2">
              <div className="flex items-center justify-center">
                <div className="flex space-x-2">
                  <a href="https://www.linkedin.com/in/pedro-de-lorenzo/" className="text-fuchsia-600 hover:text-fuchsia-600 rounded-full glow p-2" target="_blank" rel="noreferrer">
                    <AiFillLinkedin  className="text-[28px]"/>
                  </a>
                </div>
                <div className="flex space-x-2">
                  <a href="https://github.com/PedroLorenzop" className="text-fuchsia-600 hover:text-fuchsia-600 rounded-full glow p-2" target="_blank" rel="noreferrer">
                    <AiFillGithub  className="text-[28px]"/>
                  </a>
                </div>
                <div className="flex space-x-2">
                  <a href="https://www.instagram.com/eupedrao.x/" className="text-fuchsia-600 hover:text-fuchsia-600 rounded-full glow p-2" target="_blank" rel="noreferrer">
                    <AiFillInstagram   className="text-[28px]"/>
                  </a>
                </div>
              </div>
            </div>
        </div>
        <img src={img} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt="" />
    </div>
  )
}

export default Banner