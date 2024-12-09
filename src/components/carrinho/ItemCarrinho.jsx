export function ItemCarrinho({img, nome, preco}){
    return(
        <div className="flex justify-between items-center text-xl lg:mr-[8%]  my-28 ">
            
            <div className="w-36">
                <img src={img} alt="" />
            </div>

            <div className="text-[#797979]">
                <p>{nome}</p>
            </div>

            <div className="text-[#2B2B2B]">
                <p>{preco}</p>
            </div>

            <div className="text-[#A7A7A7]">
                <p>remove</p>
            </div>
        </div>
    )
}