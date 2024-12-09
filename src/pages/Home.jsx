import { Header } from "../components/Header";
import { MarcaMobile } from "../components/mobile/MarcaMobile";
import { IconMarca1 } from "../components/icons/iconMarca1"; 
import { Marca } from "../components/home/Marca";
import { SubTitulo } from "../components/Subitulo";

import { Carousel } from 'primereact/carousel';


import "../index.css"

// imgs 
import produto from "../imgs/produto.svg"
import banner21 from "../imgs/banner2-1.svg"
import banner22 from "../imgs/banner2-2.svg"
import banner23 from "../imgs/banner2-3.svg"
import { ItemBanner2 } from "../components/home/ItemBanner2";
import { CarrouselBanner2 } from "../components/home/CarrouseBanner2";
import { SessaoProdutos } from "../components/SessaoProdutos";
import { Footer } from "../components/Footer";

export function Home(){

    return(
        <>
            <Header/>

            <main className="">
                {/* marcas */}
                <section className="mx-10 sm:mx-16">
                    <SubTitulo titulo='Principais marcas'/>

                    <div className="flex sm:flex-wrap justify-center gap-x-10 gap-y-5 2xl:gap-x-16 lg:my-16 my-10  ">
                        {/* mobile  */}
                        <MarcaMobile label={'Cassio'} IconComponent={()=><IconMarca1 fill={'icon'} width={'35px'} height={'35px'}/>}/>
                        <MarcaMobile label={'Yamaha'} IconComponent={()=><IconMarca1 fill={'icon'} width={'35px'} height={'35px'}/>}/>
                        <MarcaMobile label={'Roland'} IconComponent={()=><IconMarca1 fill={'icon'} width={'35px'} height={'35px'}/>}/>

                        {/* desktop */}
                        <div className="sm:flex hidden justify-center flex-1 basis-1/2 sm:basis-1/3 md:basis-1/4 ">
                            <Marca  label={'Steinway & Sons'} IconComponent={()=><IconMarca1 fill={'icon'} width={'40px'} height={'40px'}/>} />
                        </div>
             
                        <div className="sm:flex hidden justify-center flex-1 basis-1/2 sm:basis-1/3 md:basis-1/4 ">
                            <Marca  label={'Steinway & Sons'} IconComponent={()=><IconMarca1 fill={'icon'} width={'40px'} height={'40px'}/>} />
                        </div>
             
                        <div className="sm:flex hidden justify-center flex-1 basis-1/2 sm:basis-1/3 md:basis-1/4 ">
                            <Marca  label={'Steinway & Sons'} IconComponent={()=><IconMarca1 fill={'icon'} width={'40px'} height={'40px'}/>} />
                        </div>
             
                        <div className="sm:flex hidden justify-center flex-1 basis-1/2 sm:basis-1/3 md:basis-1/4 ">
                            <Marca  label={'Steinway & Sons'} IconComponent={()=><IconMarca1 fill={'icon'} width={'40px'} height={'40px'}/>} />
                        </div>
             
                        <div className="sm:flex hidden justify-center flex-1 basis-1/2 sm:basis-1/3 md:basis-1/4 ">
                            <Marca  label={'Steinway & Sons'} IconComponent={()=><IconMarca1 fill={'icon'} width={'40px'} height={'40px'}/>} />
                        </div>
             
                        <div className="sm:flex hidden justify-center flex-1 basis-1/2 sm:basis-1/3 md:basis-1/4 ">
                            <Marca  label={'Steinway & Sons'} IconComponent={()=><IconMarca1 fill={'icon'} width={'40px'} height={'40px'}/>} />
                        </div>
                    </div>
                </section>

                {/* mais vendidos */}
                <SessaoProdutos produto={produto} titulo='Mais vendidos' />

                {/* banner 2 */}

                <section className="my-5 !mx-0">
                    <div className=" gap-x-10 justify-center hidden lg:flex">
                        <ItemBanner2 label='estudos' img={banner21}/>
                        <ItemBanner2 label='shows' img={banner22}/>
                        <ItemBanner2 label='concertos' img={banner23}/>
                    </div>
                        <CarrouselBanner2/>
                </section>

                  {/* Populares */}
                  <SessaoProdutos produto={produto} titulo='Populares' />

            </main>

            <Footer/>
        </>
    )
}
