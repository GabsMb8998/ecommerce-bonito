import { useState } from "react"

export function ItemFiltro({label, selected, setItemFiltro}){

    // const [selected, setSelected] = useState(false)
    console.log( selected, 'selected')
    return(
        <div className={`${selected ? 'bg-[#2C2C2C] text-white' : ' text-[#646464] border-[1px] border-[border-clara] '} rounded-full px-5  py-2 text-md `} onClick={()=>{
            setItemFiltro(label)
            }}>
            <p>{label}</p>
        </div>
    )
}