import { useNavigate } from "react-router-dom"

export function ItemMenuMobile({label, destination}){
    const navigate = useNavigate()

    return(
        <a 
        className="text-[#8B8B8B] text-lg"
        onClick={navigate(`/${destination}`)}>{label}</a>
    )
}