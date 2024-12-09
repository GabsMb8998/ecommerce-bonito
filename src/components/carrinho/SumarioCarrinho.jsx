import { BotaoFinalizarPagamento } from "../BotaoFinalizarPagamento";
import { ItemSumarioCarrinho } from "../mobile/ItemSumarioCarrinho";
import { SubTitulo } from "../Subitulo";

export function SumarioCarrinho(){
    return(
        <div className="bg-white 2xl:w-[27%] w-[35%] h-[30rem] right-16 rounded-lg p-16 hidden xl:block">
            <div>
                <SubTitulo titulo={'Sumário'}/>
            </div>

            <div className="my-12">
                <ItemSumarioCarrinho label='Frete' valor='652'/>
                <ItemSumarioCarrinho label='Total produtos' valor='652 000'/>
                <ItemSumarioCarrinho label='Total' valor='652'/>
            </div>

            <div className="flex justify-center mt-20">
                <BotaoFinalizarPagamento/>
            </div>


        </div>
    )
}