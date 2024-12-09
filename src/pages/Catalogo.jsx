import { Aside } from "../components/catalogo/Aside";
import { Header } from "../components/Header";
import { Produto } from "../components/Produto";
import { ButtonProduto } from "../components/produto/ButtonProduto";
import { SubTitulo } from "../components/Subitulo";
import { useEffect, useState } from "react";
import { ItemFiltro } from "../components/catalogo/ItemFiltro";

import produto from "../imgs/produto.svg"
import iconFechar from "../imgs/icon-fechar.svg"
import { MenuHamburguer } from "../components/mobile/MenuHamburguer";

export function Catalogo(){

    const [filtroSelected, setFiltroSelected] = useState(false)
    const [itemFiltro, setItemFiltro] = useState('ordenar por')
    const filtros = ['ordenar por', 'categoria' ,'marcas', 'preço']
    
    const [itemFiltroOrdenarPor, setItemFiltroOrdenarPor] = useState('')
    const ordenarPor = ['relevantes', 'maior preço', 'menor preço' ]
    
    const [itemFiltroCategoria, setItemFiltroCategoria] = useState('')
    const categoria = ['piano de cauda', 'piano de armário', 'piano digita', 'teclados' ]
    
    const [itemFiltroMarca, setItemFiltroMarca] = useState('')
    const marca = ['Yamaha', 'Cassio', 'Roland', 'Steinway & Sons', 'Bosendorfer' ]

    useEffect(()=>{
        if (window.innerWidth > 640){
            setFiltroSelected(false)
            console.log(filtroSelected, 'teste')
        }
    }, [filtroSelected])

    console.log(filtroSelected, 'filtro')

    return(
        <div className="">
            <Header/>

            <main className= {`${filtroSelected && 'overflow-hidden'} flex md:ml-20 lg:mx-10 md:gap-x-10 lg:gap-x-20 md:my-28`}>
                <Aside/>

                {/* produtos  */}
                <div className={`${filtroSelected && 'hidden'} 2xl:mx-32 md:mx-28`} >

                    <div className="sm:hidden ml-3 my-8">
                        <button className="bg-[#313131] text-white px-9 py-3 rounded-lg text-xl" onClick={()=>setFiltroSelected(!filtroSelected)}>Filtros</button>
                    </div>
                    
                    <div>   
                        <h2 className="text-4xl font-light mb-10 ml-3">Catálogo</h2>
                    </div>
                    <div className={` grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-x-16 gap-y-10`}>
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


                {/* filtro  */}
                <div className={`${filtroSelected ? 'block' : 'hidden'} bg-white w-full h-[75vh] fixed bottom-0 rounded-2xl py-10 px-8 sm:hidden flex flex-col `}>
                    <div className="flex justify-between">
                        <h3 className="font-medium text-3xl">Filtros</h3>
                        <img className="ml-3" onClick={()=>{setFiltroSelected(!filtroSelected)}} src={iconFechar} alt="" />
                    </div>

                    <div className="flex flex-wrap gap-y-3 gap-x-5 my-7">
                        {filtros.map((item, index)=>(
                            <ItemFiltro key={index} label={item} selected={itemFiltro === item} setItemFiltro={setItemFiltro} />
                        ))}

                        <div className="w-full h-[0.2px] bg-[#E6E6E6] mt-2"></div>
                    </div>

                    <div className="flex flex-wrap gap-y-3 gap-x-5 my-7">
                        {itemFiltro === 'ordenar por' ? (
                            ordenarPor.map((item, index)=>(
                                <ItemFiltro key={index} label={item} selected={itemFiltroOrdenarPor === item} setItemFiltro={setItemFiltroOrdenarPor} />
                            ))
                        ): itemFiltro === 'categoria' ?(

                            categoria.map((item, index)=>(
                                <ItemFiltro key={index} label={item} selected={itemFiltroCategoria === item} setItemFiltro={setItemFiltroCategoria} />
                            ))
                        ):itemFiltro === 'marcas' ? (
                            marca.map((item, index)=>(
                                <ItemFiltro key={index} label={item} selected={itemFiltroMarca === item} setItemFiltro={setItemFiltroMarca} />
                            ))
                        ): (null)
                    
                    }
                    </div>

                    <div className="flex absolute bottom-10 gap-x-4 justify-center">
                        <button className="border-[1px] border-[border-clara] text-[#646464] rounded-lg px-8 py-3 text-xl">limpar</button>
                        <button className="bg-[#313131] text-white rounded-lg px-10 py-3 text-xl" onClick={()=>setFiltroSelected(!filtroSelected)}>aplicar</button>
                    </div>
                </div>
            </main>
        </div>
    )
}