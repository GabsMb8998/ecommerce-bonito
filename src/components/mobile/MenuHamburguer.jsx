import iconFecharMenu from "../../imgs/icon-fechar-menu.svg"
import { ItemMenuMobile } from "./ItemMenuMobile"
import iconUSer from "../../imgs/icon-user.svg"
import iconCart from "../../imgs/icon-cart.svg"
import iconEmail from "../../imgs/icon-email.svg"
import iconNumber from "../../imgs/icon-number.svg"


export function MenuHamburguer({open, setOpen}){
    return(

        <>
            <aside className={`${open ? 'block' : '-z-10 opacity-0'} ${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'} 
            h-full w-56 bg-fundo fixed top-0 z-20  transform transition-all duration-300 ease-in-out sm:hidden p-5` }>
                
                {/* botao fechar */}
                <div className="absolute -right-2 top-7" onClick={()=>{setOpen(!open)}}>
                    <img className="scale-150 " src={iconFecharMenu} alt="" />
                </div>

                    <div className="flex gap-x-2 mb-10">
                        <img className="w-5" src={iconUSer} alt="" />
                        <img className="w-7" src={iconCart} alt="" />
                    </div>
                    
                    {/* navegacao  */}
                    <div className="">
                        <h4 className="text-xl font-semibold">navegação</h4>

                        <div className="flex flex-col my-3 gap-y-1">
                            <ItemMenuMobile label={'home'} destination={''} setOpen={setOpen}/>
                            <ItemMenuMobile label={'catalogo'} destination={'catalogo'} setOpen={setOpen}/>
                            <ItemMenuMobile label={'carrinho'} destination={'cart'} setOpen={setOpen}/>
                            <ItemMenuMobile label={'contato'} destination={''} setOpen={setOpen}/>
                            <ItemMenuMobile label={'sobre nós'} destination={''} setOpen={setOpen}/>
                        </div>
                    </div>

                    {/* contato  */}
                    <div className="my-7">
                        <h4 className="text-xl font-semibold">contato</h4>

                        <div className="flex flex-col gap-y-3 my-3">
                            <div className="flex items-center gap-x-2">
                                <img className="w-6" src={iconNumber} alt="" />
                                <p className="text-sm text-[#8B8B8B]">(19) 99999 - 9999</p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <img className="w-8" src={iconEmail} alt="" />
                                <p className="text-[11px] text-[#8B8B8B]">KeyNote@gmail.com</p>
                            </div>
                        </div>

                    </div>
            </aside>

            <div className={`transition-opacity duration-300 ease-in-out ${open ? 'opacity-65 z-10' : 'opacity-0 pointer-events-none -z-20'} bg-black w-screen h-screen fixed top-0 sm:hidden`}></div>
        </>
    )
}