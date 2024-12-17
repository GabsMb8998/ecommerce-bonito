import "../index.css"

export function Contato (){
    return(
        <div className="bg-white p-32 rounded-lg w-[1000px] self-center mx-auto justify-center shadow-contato lg:flex hidden flex-col">
            <div className="flex flex-col gap-y-10 ">

                <h3 className="flex self-start text-3xl font-medium">Entre em contato</h3>

                <div className="flex gap-x-20 justify-center">

                    <div>
                        <input type="text" placeholder="digite sua mensagem" className="border-[#B3B3B3] border-[1px] rounded-md h-44 px-6 justify-start self-start text-left w-[20rem] " />
                    </div>

                    <div className="flex flex-col justify-between">

                        <input type="text" placeholder="nome" id="" className="border-[#B3B3B3] border-[1px] rounded-md py-3 px-5 w-[20rem]"/>

                        <input type="text" placeholder="email" id="" className="border-[#B3B3B3] border-[1px] rounded-md py-3 px-5"/>   
                    </div>
                </div>
            </div>

            <button className="bg-[#313131] rounded-md mt-2 text-white font-semibold px-14 mt-10 py-4 self-end lg:hover:scale-110 duration-300 text-sm lg:text-md ">Enviar</button>
        </div>
    )
}