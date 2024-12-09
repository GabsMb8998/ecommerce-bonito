import "../index.css"
import { NavHeader } from "./NavHeader"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// imgs 
import iconCart from '../imgs/icon-cart.svg'
import iconSearch from '../imgs/icon-search.svg'
import menu from "../imgs/menu.svg"
import { MenuHamburguer } from "./mobile/MenuHamburguer"
export function Header({}){

    const [NavSelected, setNavSelected] = useState('home')
    const navigate = useNavigate() 
    const [open, setOpen] = useState(true)


    return(

        <>
            <header className="flex justify-between lg:mx-16 mx-5 my-8">
                
                <div className="flex items-center gap-x-3 2xl:gap-x-24 xl:gap-x-14">

                    <div className="lg:hidden">
                        <img className="w-10" onClick={()=>setOpen(!open)} src={menu} alt="" />
                    </div>

                    <div className="font-logo text-5xl hidden lg:block" onClick={()=>navigate('/')}>
                        KeyNote
                    </div>
                    
                    <div className="font-logo text-3xl block lg:hidden" onClick={()=>navigate('/')}>
                        KN
                    </div>
                    
                    <nav className={`2xl:gap-x-16 xl:gap-x-9 hidden xl:flex`}>
                        <NavHeader label='home' selected={NavSelected === 'home'}/>
                        <NavHeader label='catalogo' selected={NavSelected === 'catalogo'}/>
                        <NavHeader label='sobre nós' selected={NavSelected === 'sebre nós'}/>
                    </nav>
                </div>

                <div className=" flex relative shadow-barra-pesquisa rounded-lg lg:h-14 h-12 lg:w-[32rem] sm:w-[20rem] w-[12rem]">
                    <input className="sm:pl-14 pl-12 pr-20 w-full rounded-lg" type="text" placeholder="search" />
                    <img className="absolute top-[26%] left-4 w-6 lg:w-7" src={iconSearch} alt="" />
                    <div className="h-[60%] w-[1px] bg-[#CDCDCD] absolute right-14 sm:right-20 top-3"></div>
                    <img className="lg:w-8 w-7 absolute sm:right-7 right-4 top-[25%]" src={iconCart} onClick={()=>navigate('/cart')} alt="" />
                </div>
            </header>

            <MenuHamburguer open={open} setOpen={setOpen}/>
        
        </>
    )
}