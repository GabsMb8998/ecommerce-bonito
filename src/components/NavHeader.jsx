import { useNavigate } from "react-router-dom"

export function NavHeader({selected, label, setNavSelected, destino}){
    const navigate = useNavigate()

    return(

        <div onClick={()=>{
            // setNavSelected(label)
            navigate(`/${destino}`)
            }}>
            <a className={`${selected ? "text-black font-semibold" :'text-[#434343]'}  text-xl`}>{label}</a>
            <div className={`${selected ? 'block w-full h-[1px] bg-black' : 'hiddden'}`}></div>
        </div>
    )
}