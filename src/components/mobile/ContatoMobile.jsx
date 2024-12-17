export function ContatoMobile(){
    return(
        <div className="bg-white lg:hidden mx-5 px-10 rounded-md py-16 ">
              <h3 className="flex self-start text-xl font-medium mb-10">Entre em contato</h3>

            <div className="w-full flex flex-col gap-y-7">
                <input type="text" placeholder="nome" id="" className="border-[#B3B3B3] border-[1px] rounded-md py-3 px-5 "/>

                <input type="text" placeholder="email" id="" className="border-[#B3B3B3] border-[1px] rounded-md py-3 px-5"/>  
                
                <input type="text" placeholder="mensagem" id="" className="border-[#B3B3B3] border-[1px] rounded-md py-3 px-5"/>  
            </div>

            <button className="bg-[#313131] rounded-md  text-white font-semibold px-14 mt-8 py-4 self-end lg:hover:scale-110 duration-300 text-sm lg:text-md ">Enviar</button>
        </div>
    )
}