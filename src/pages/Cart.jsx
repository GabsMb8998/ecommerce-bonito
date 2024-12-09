import { ItemCarrinho } from "../components/carrinho/ItemCarrinho";
import { SumarioCarrinho } from "../components/carrinho/SumarioCarrinho";
import { Header } from "../components/Header";
import { ItemCarrinhoMobile } from "../components/mobile/IteCarrinhoMobile";
import { SumarioCarrinhoMobile } from "../components/mobile/SumarioCarrinho";
import { SubTitulo } from "../components/Subitulo";
import { useNavigate } from "react-router-dom";

// imgs
import produto from "../imgs/produto.svg"
import iconVoltar from "../imgs/icon-arrow-back.svg"


export function Cart(){

    const navigate = useNavigate()

    return(
        <div>
            {/* <Header/> */}
            <main>
                <section className="mx-10 mb-64 xl:mx-16 lg:mx-16">
                    <div className="mt-16 mb-10">
                        <img onClick={()=>navigate(-1)} src={iconVoltar} alt="" />
                    </div>

                    <div className="">
                        <SubTitulo titulo='carrinho'/>
                    </div>

                    <div >
                        <div className="my-10">
                            <ItemCarrinhoMobile nome='Yamaha sei la' preco='78.000' img={produto}/>
                        </div>
                        <div className="my-10">
                            <ItemCarrinhoMobile nome='Yamaha sei la' preco='78.000' img={produto}/>
                        </div>
                        <div className="my-10">
                            <ItemCarrinhoMobile nome='Yamaha sei la' preco='78.000' img={produto}/>
                        </div>
                    </div>
                    
                    <div className="hidden sm:flex justify-between">
                        <div className="xl:w-[70%] pl-10 w-full">
                            <ItemCarrinho img={produto} nome={'Yamaha sei la'} preco={'78.000'}/>
                            <ItemCarrinho img={produto} nome={'Yamaha sei la'} preco={'78.000'}/>
                            <ItemCarrinho img={produto} nome={'Yamaha sei la'} preco={'78.000'}/>
                
                        </div>

                        <SumarioCarrinho/>

                    </div>

                </section>

                <SumarioCarrinhoMobile frete={362} totalProduto={354.521}/>

            </main>
        </div>
    )
}