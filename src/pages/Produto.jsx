import { ButtonProduto } from "../components/produto/ButtonProduto"
import { SubTitulo } from "../components/Subitulo"
import { useNavigate } from "react-router-dom"
import "../index.css"

import produto from "../imgs/produto.svg"
import iconBack from "../imgs/icon-arrow-back.svg"
import iconFavoritos from "../imgs/icon-favoritos.svg"
import { Header } from "../components/Header"
import { SessaoProdutos } from "../components/SessaoProdutos"
import { Footer } from "../components/Footer"

export function Produto(){

    const navigate = useNavigate()

    return(
            
        <div>
            {/* // mobile  */}
            <main className="sm:hidden">
                {/* imagem /parte de cima  */}
                <section className="relative h-[37vh] flex items-center justify-center">
                    <div className="absolute top-5 left-8 ">
                        <img onClick={()=>navigate(-1)} src={iconBack} alt="" />
                    </div>

                    <div className="absolute right-8 top-5">
                        <img src={iconFavoritos} alt="" />
                    </div>

                    <div className="flex justify-center items-center">
                        <img className="w-52 p-5" src={produto} alt="" />
                    </div>
                </section>

                {/* descricao / parte de baixo */}
                <section className="bg-white rounded-t-xl h-[60vh] p-8 flex flex-col justify-between bottom-0 absolute">

                    <div className="flex flex-col gap-y-5">
                        <div>
                            <SubTitulo titulo={'Piano Yamaha'}/>
                        </div>

                        <div>
                            <p className="text-lg text-[#707070] font-semibold">Descrição</p>
                            <p className="text-[#7D7D7D] font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Ut molestias illum nobis necessitatibus. Obcaecati corporis perferendis consectetur impedit fugiat itaque, corrupti autem!
                            Voluptatum laudantium ipsam consequatur in explicabo, accusamus quod. </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-2xl">R$ 78.500</p>
                        <ButtonProduto/>
                    </div>
                </section>
            </main>

            {/* desktop  */}

            <div className="hidden sm:block">
                <Header/>

                <main className="xl:m-32 m-20">
                    
                    {/* imagem e principais informacoes */}
                    <div className="flex justify-between">

                        <div className="w-[90%] flex xl:justify-center">
                            <img src={produto} alt="" />
                        </div>

                        <div className="bg-white rounded-lg px-10 py-20 flex flex-col justify-between">
                            <div>
                                <SubTitulo titulo='Piano Yamaha'/>
                                <p className="text-[#BBBBBB] font-light mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea facilis iure nesciunt</p>
                            </div>


                            <div >
                                <div className="my-10">
                                    <p className="text-4xl">R$ 78 500</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <ButtonProduto/>
                                    </div>

                                    <div className="bg-[#F3F2F2] p-5 rounded-lg">
                                        <img  src={iconFavoritos} alt="" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* descricao */}

                    <div className="my-44">
                        <SubTitulo titulo='Descricao'/>
                        <p className="text-[#5E5B5B] font-light my-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores suscipit quod nobis esse hic fugit voluptatem consectetur. Modi tenetur sequi fugiat, reprehenderit consequuntur placeat quae dm ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores suscipit quod nobis esse hic fugit voluptatem consectetur. Modi tenetur sequi fugiat, reprehenderit consequuntur placeat quae dm ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores suscipit quod nobis esse hic fugit voluptatem consectetur. Modi tenetur sequi fugiat, reprehenderit consequuntur placeat quae dm ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores suscipit quod nobis esse hic fugit voluptatem consectetur. Modi tenetur sequi fugiat, reprehenderit consequuntur placeat quae dm ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores suscipit quod nobis esse hic fugit voluptatem consectetur. Modi tenetur sequi fugiat, reprehenderit consequuntur placeat quae dm ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores suscipit quod nobis esse hic fugit voluptatem consectetur. Modi tenetur sequi fugiat, reprehenderit consequuntur placeat quae dm ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores suscipit quod nobis esse hic fugit voluptatem consectetur. Modi tenetur sequi fugiat, reprehenderit consequuntur placeat quae deleniti atque corporis id?</p>
                    </div>

                    <SessaoProdutos/>
                </main>

                <Footer/>
            </div>
        </div>

    )
}