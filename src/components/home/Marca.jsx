import "../../index.css"

export function Marca({IconComponent, label}){
    return(
        <div className="flex flex-col justify-center rounded-md border-[1px] border-[border-clara] 2xl:w-48 2xl:h-48 flex-1 w-40 h-40 hover:bg-[#252525] hover:text-white hover:scale-110 duration-300 ">
            <div className="m-5">
                <IconComponent/>
            </div>
            <p className='font-forum m-5 text-lg'>{label}</p>
        </div>
    )
}