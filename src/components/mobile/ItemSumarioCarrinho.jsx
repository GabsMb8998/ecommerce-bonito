export function ItemSumarioCarrinho({label, valor}){
    return (
        <div className={`${label !== 'Total' ? 'text-[#858585]': 'text-black font-semibold'} flex justify-between my-2 xl:my-6 2xl:text-xl text-lg `}>
        <p>{label}</p>
        <p>{valor}</p>
    </div>
    )
}