export function ContatoFooter({icon, label}){
    return(
        <div className="flex">
            <img className=" w-7" src={icon} alt="" />
            <p className="text-[#B3B3B3] tablet:text-xl text-sm ml-3">{label}</p>
        </div>
    )
}