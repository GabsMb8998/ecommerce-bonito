import iconRemove from "../../imgs/icon-remove.svg"

export function ItemCarrinhoMobile({img, nome, preco}){
    return(
        <div className={`sm:hidden flex bg-white p-5 rounded-lg h-40 relative`} >

            <div className="bg-[#F8F8F8] rounded-lg w-28 p-3 flex justify-center items-center">
                <img className="p-3 w-32" src={img} alt="" />
            </div>

            <div className="flex flex-col my-4 gap-y-5 ml-3">
                <p className="text-xl font-semibold text-[#2A2A2A]">{nome}</p>
                <p className="text-[#9A9A9A] text-lg">R$ {preco}</p>
            </div>

            <div className="absolute bottom-5 right-5">
                <img src={iconRemove} alt="" />
            </div>
        </div>
    )
}