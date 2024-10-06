import img1 from "../assets/Java.png"
import img2 from "../assets/RedeSocial.png"
import img3 from "../assets/Iot.png"

const Projetos = () => {
  return (
    <div id="Projetos" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800">Projetos</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        
        {/* Primeiro projeto */}
        <div className="flex flex-col items-center min-h-[350px] justify-between">
          <img data-aos="fade-up" height={300} width={300} className='text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={img1} alt="Sistema Bancário" />
          <h2 className="text-[24px] font-bold mt-4 text-fuchsia-800">Sistema Bancário</h2>
          <p className="text-center text-fuchsia-800">Um sistema simples de banco utilizando Java onde o usuário pode sacar, colocar dinheiro e ver seu extrato.</p>
          <a href="https://github.com/PedroLorenzop/ContaBancaria" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-fuchsia-800 text-white py-2 px-4 rounded-lg hover:bg-fuchsia-700 transition duration-300">Ver no GitHub</button>
          </a>
        </div>
        
        {/* Segundo projeto */}
        <div className="flex flex-col items-center min-h-[350px] justify-between">
          <img data-aos="fade-down" height={350} width={300} className='text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={img2} alt="Rede Social" />
          <h2 className="text-[24px] font-bold mt-4 text-fuchsia-800">Rede Social</h2>
          <p className="text-center text-fuchsia-800">Uma rede social em JavaScript, CSS e HTML, onde o usuário pode inserir texto e fotos, além de aplicar filtros de busca nas publicações.</p>
          <a href="https://github.com/PedroLorenzop/CP3Web" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-fuchsia-800 text-white py-2 px-4 rounded-lg hover:bg-fuchsia-700 transition duration-300">Ver no GitHub</button>
          </a>
        </div>
        
        {/* Terceiro projeto */}
        <div className="flex flex-col items-center min-h-[350px] justify-between">
          <img data-aos="fade-up" height={350} width={300} className='text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={img3} alt="Sistema IoT" />
          <h2 className="text-[24px] font-bold mt-4 text-fuchsia-800">Sistema em IoT</h2>
          <p className="text-center text-fuchsia-800">Um sistema em IoT que captura dados de turbidez, pH, temperatura e umidade da água.</p>
          <a href="https://github.com/PedroLorenzop/GsEdge" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-fuchsia-800 text-white py-2 px-4 rounded-lg hover:bg-fuchsia-700 transition duration-300">Ver no GitHub</button>
          </a>
        </div>
        
        {/* Quarto projeto */}
        <div className="flex flex-col items-center min-h-[350px] justify-between">
          <img data-aos="fade-down" height={350} width={300} className='text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={img1} alt="Cadastro Ninja" />
          <h2 className="text-[24px] font-bold mt-4 text-fuchsia-800">Cadastro Ninja</h2>
          <p className="text-center text-fuchsia-800">Sistema feito em Java onde o usuário pode cadastrar um ninja de Konoha.</p>
          <a href="https://github.com/PedroLorenzop/CadastroNinja" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-fuchsia-800 text-white py-2 px-4 rounded-lg hover:bg-fuchsia-700 transition duration-300">Ver no GitHub</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projetos
