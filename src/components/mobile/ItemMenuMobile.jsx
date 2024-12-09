import { useNavigate } from "react-router-dom"

export function ItemMenuMobile({label, destination, setOpen}){
    const navigate = useNavigate()

    return(
        <a 
        className="text-[#8B8B8B] text-md"
        onClick={()=>{
            navigate(`/${destination}`)
            setOpen(false)
        }}>{label}</a>
    )
}