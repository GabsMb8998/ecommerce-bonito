import { Aside } from "../components/catalogo/Aside";
import { Header } from "../components/Header";
import { Produto } from "../components/Produto";
import { ButtonProduto } from "../components/produto/ButtonProduto";
import { SubTitulo } from "../components/Subitulo";
import { useState } from "react";

import produto from "../imgs/produto.svg"

export function Catalogo(){

    const [filtroSelected, setFiltroSelected] = useState(false)

    return(
        <div className="">
            <Header/>

            <main className="flex md:ml-20 lg:mx-10 md:gap-x-10 lg:gap-x-20 md:my-28">
                <Aside/>

                {/* produtos  */}
                <div className="2xl:mx-32 md:mx-28" >

                    <div className="sm:hidden ml-3 my-8">
                        <button className="bg-[#313131] text-white px-9 py-3 rounded-lg text-xl">Filtros</button>
                    </div>

                    <div>
                        <h2 className="text-4xl font-light mb-10 ml-3">Catálogo</h2>
                    </div>
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-x-16 gap-y-10">
                        <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                    </div>
                </div>
            </main>
        </div>
    )
}