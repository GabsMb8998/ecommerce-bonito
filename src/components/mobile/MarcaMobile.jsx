export function MarcaMobile({IconComponent, label}){
    return(
        <div className="sm:hidden flex flex-col items-center w-[50%] lg:[30%]">

            <div className="rounded-full flex justify-center items-center border-2 border-[border-clara] w-16 h-16">
                <IconComponent/>
            </div>

            <p className={`  text-sm mt-1`}>{label}</p>

        </div>
    )
}