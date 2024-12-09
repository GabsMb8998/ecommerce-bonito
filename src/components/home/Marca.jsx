import "../../index.css"

export function Marca({IconComponent, label}){
    return(
        <div className="flex flex-col justify-center rounded-md border-[1px] 
        border-[border-clara] w-48 md:h-48 h-40 flex-1
         hover:bg-[#252525] hover:text-white hover:scale-110 duration-300 ">
            <div className="m-5">
                <IconComponent/>
            </div>
            <p className='font-forum m-5 text-xl'>{label}</p>
        </div>
    )
}