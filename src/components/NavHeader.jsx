export function NavHeader({selected, label}){
    return(

        <div>
            <a className={`${selected ? "text-black font-semibold" :'text-[#434343]'}  text-xl`}>{label}</a>
            <div className={`${selected ? 'block w-full h-[1px] bg-black' : 'hiddden'}`}></div>
        </div>
    )
}