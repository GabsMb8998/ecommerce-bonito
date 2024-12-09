import iconFecharMenu from "../../imgs/icon-fechar-menu.svg"
import { ItemMenuMobile } from "./ItemMenuMobile"

export function MenuHamburguer({open, setOpen}){
    return(

        <>
            <div className={`${open ? 'block' : '-z-10 opacity-0'} ${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'} h-full w-48 bg-fundo fixed top-0 z-20  transform transition-all duration-300 ease-in-out sm:hidden` }>
                
                {/* <div className="absolute -right-2 top-7" onClick={()=>{setOpen(!open)}}>
                    <img className="scale-150 " src={iconFecharMenu} alt="" />
                </div> */}
                    <div>
                        <h4>Navegação</h4>

                        <div className="flex flex-col">
                            <ItemMenuMobile label={'home'} destination={''}/>
                            <ItemMenuMobile label={'catalogo'} destination={'catalogo'}/>
                            <ItemMenuMobile label={'carrinho'} destination={'cart'}/>
                            <ItemMenuMobile label={'contato'} destination={''}/>
                            <ItemMenuMobile label={'sobre nós'} destination={''}/>

                        </div>
                </div>
            </div>

            <div className={`transition-opacity duration-300 ease-in-out ${open ? 'opacity-65 z-10' : 'opacity-0 pointer-events-none -z-20'} bg-black w-screen h-screen fixed top-0 sm:hidden`}></div>
        </>
    )
}