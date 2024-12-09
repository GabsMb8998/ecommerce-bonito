import { useState } from "react"

export function InputAside({label}){
    const [selected, setSelected] = useState(false)

    return(
        <div className="flex items-center gap-x-3 ">
            <div className={`${selected && 'bg-black'} w-7 h-7 border-[1px] border-[#CBCBCB] rounded-lg`} onClick={()=>{selected ? setSelected(false) : setSelected(true)}}></div>
            <label className="text-[#818181] text-lg" >{label}</label>
         
        </div>
    )
}