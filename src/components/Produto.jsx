import { useNavigate } from "react-router-dom"

export function Produto({img, nome, preco}){

    const navigate = useNavigate()

    return(
        <div className="border-[1px] border-[border-clara] w-48 px-6 py-7 rounded-lg mx-3 sm:mx-0" onClick={()=>navigate('/produto')}>
            <img src={img} alt="" />

            <div className="mt-5">
                <p className="text-[#333333] text-lg">{nome}</p>
                <p className="text-[#797979] ">R$ {preco}</p>
            </div>
        </div>
    )
}