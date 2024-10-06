import {FaGithub} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Pedro de Lorenzo</span>
          <p className="text-[16px] my-4">&copy; 2024 todos os direitos reservados por Pedro de Lorenzo</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contato</h2>
          <p>Email: delorenzopedro10@gmail.com</p>
          <p>Telefone: (17) 99134-1680</p>
        </div>
        <h2></h2>
        <div>
          <a href="https://github.com/PedroLorenzop">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pedro-de-lorenzo/">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/eupedrao.x/">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;