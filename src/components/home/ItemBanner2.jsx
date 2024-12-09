export function ItemBanner2({img, label}){
    return(

        <div className="rounded-lg relative lg:overflow-hidden ">

            <div style={{backgroundImage:`url(${img})`,}} className="lg:w-[360px] h-[87vh] bg-no-repeat text-white lg:hover:text-black rounded-lg lg:hover:scale-110 duration-300 transform transition-transform mx-2 lg:mx-0">

                <div className="w-full h-full bg-black opacity-[0.5] lg:hover:bg-white hover:opacity-[0.7] duration-300 rounded-lg" ></div>
                <p className={` absolute bottom-5 left-5 md:text-3xl sm:text-2xl text-lg z-10 select-none`}>{label}</p>

            </div>

        </div>
    )
}
    