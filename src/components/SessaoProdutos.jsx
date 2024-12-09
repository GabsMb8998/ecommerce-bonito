import { SubTitulo } from "../components/Subitulo";
import { Produto } from "../components/Produto";
import { CarrouselProdutosMobile } from "../components/mobile/CarrouselProdutosMobile";

export function SessaoProdutos({titulo, produto}){
    return(
        <section className="my-20 mx-10 sm:mx-16">

                    <SubTitulo titulo={titulo}/>

                    <div className=" flex-wrap justify-center gap-y-10 gap-x-5 my-16 hidden sm:flex lg:hidden">
                
                        <div className="flex justify-center flex-1 basis-1/4 lg:basis-1/5">
                            <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        </div>
                
                        <div className="flex justify-center flex-1 basis-1/4 lg:basis-1/5">
                            <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        </div>

                        <div className="flex justify-center flex-1 basis-1/4 lg:basis-1/5">
                            <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        </div>
                    
                        <div className="flex justify-center flex-1 basis-1/4 lg:basis-1/5">
                            <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        </div>

                        <div className="flex justify-center flex-1 basis-1/4 lg:basis-1/5">
                            <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        </div>
                
                        <div className="flex justify-center flex-1 basis-1/4 lg:basis-1/5">
                            <Produto img={produto} nome={'Yamaha sei la'} preco={'78.500'}/>
                        </div>
                    </div>

                    <CarrouselProdutosMobile/>

                </section>
    )
}