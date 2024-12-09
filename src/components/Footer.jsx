import { LinkFooter } from "./LinkFooter";
import { TituloFooter } from "./TituloFooter";
import { ContatoFooter } from "./ContatoFooter";

import iconWhats from "../imgs/icon-number.svg"
import iconEmail from "../imgs/icon-email.svg"

import "../index.css"
        
export function Footer(){
    return(
        <footer className="bg-[#050505] w-full h-96 flex justify-center md:gap-24 gap-14 xl:grid xl:grid-cols-3 xl:px-32 px-10 items-center mt-28">

            <div className="text-white flex justify-center font-logo lg:text-5xl text-2xl">KeyNote</div>

            <div className="hidden lg:flex flex-col items-center ">

                <div className="flex flex-col gap-y-2">

                    <TituloFooter label='Navegação'/>
                    <LinkFooter label='Home'/>
                    <LinkFooter label='Carrinho'/>
                    <LinkFooter label='Todos os produtos'/>
                    <LinkFooter label='Sobre nós'/>
                </div>
            </div>
            
            {/* contato  */}
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-y-4">
                    <TituloFooter label='Contato'/>
                    <ContatoFooter icon={iconWhats} label={"(99) 99999 - 9999"}/>
                    <div className="flex">

                        <div className="w-8">
                            <img className="w-full " src={iconEmail} alt="" />

                        </div>
                        <p className="text-[#B3B3B3] tablet:text-xl text-sm ml-3">keynote@gmail.com</p>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}
