import { InputAside } from "./InputAside";
import { SubtituloAside } from "./SubtituloAside";

export function Aside(){
    return(
        <div className="hidden md:block">
            <h3 className="text-3xl font-semibold">Filtros</h3>

            <div className="my-8">
                <SubtituloAside subtitulo='organizar por'/>

                <div className="flex flex-col gap-y-4 mt-3">
                    <InputAside label='Relevantes'/>
                    <InputAside label='Maior preço'/>
                    <InputAside label='Menor preço'/>
                </div>
            </div>
            <div className="my-8">
                <SubtituloAside subtitulo='categoria'/>

                <div className="flex flex-col gap-y-4 mt-3">
                    <InputAside label='Piano de cauda'/>
                    <InputAside label='Piano de armário'/>
                    <InputAside label='Piano digital'/>
                    <InputAside label='Piano elétrico'/>
                </div>
            </div>
            <div className="my-8">
                <SubtituloAside subtitulo='marcas'/>

                <div className="flex flex-col gap-y-4 mt-3">
                    <InputAside label='Yamaha'/>
                    <InputAside label='Cassio'/>
                    <InputAside label='Roland'/>
                    <InputAside label='Steinway & Sons'/>
                    <InputAside label='Bosendorfer'/>
                </div>
            </div>

            <div className="my-8">
                <SubtituloAside subtitulo='preço'/>

                <div className="flex flex-col gap-y-4 mt-3">
                
                </div>
            </div>

            div
        </div>
    )
}