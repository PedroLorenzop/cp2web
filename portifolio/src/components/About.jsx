import img from "../assets/perfilia.png";

const About = () => {
  return (
    <div id="Sobre" className="lg:px-56 px-10 lg:py-0 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <img data-aos="fade-right"
        src={img}
        width={290}
        height={290}
        className="rounded border-2 p-1 border-fuchsia-500 img_glow"
        alt=""
      />
      <div  className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[53px] font-semibold mb-8 leading-normal">
          Olá, eu sou o{" "}
          <span className="text-fuchsia-600">Pedro de Lorenzo</span>
        </h1>
        <p data-aos="fade-right" className="text-[20px]">
          Sou estudante de Engenharia de Software pela{" "}
          <span className="italic">FIAP</span>, com foco em desenvolvimento{" "}
          <span className="italic">back-end e mobile.</span> Tenho experiência
          com diversas tecnologias e busco constantemente me atualizar e
          aprender novas habilidades para entregar soluções eficazes e
          otimizadas.👍
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button  className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resumo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
