import { BotaoFinalizarPagamento } from "../BotaoFinalizarPagamento";
import { ItemSumarioCarrinho } from "./ItemSumarioCarrinho";

export function SumarioCarrinhoMobile({frete, totalProduto,}){

    const valorFrete = parseFloat(frete) || 0;
    const valorTotalProduto = parseFloat(totalProduto) || 0;

    const total = valorFrete + valorTotalProduto;

    return(
        <div className={` fixed bottom-0 rounded-t-lg bg-white w-full h-56 py-5 px-8 sm:px-24 xl:hidden`} >

            <ItemSumarioCarrinho label={'frete'} valor={frete}/>
            <ItemSumarioCarrinho label={'Total produtos'} valor={totalProduto}/>
            <ItemSumarioCarrinho label={'Total'} valor={total}/>

            <div className="flex justify-end">
               <BotaoFinalizarPagamento/>
            </div>

        </div>
    )
}