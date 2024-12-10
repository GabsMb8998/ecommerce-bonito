import pianoCauda from "../imgs/piano-cauda.svg"
import pianoArmario from "../imgs/piano-armario.svg"
import pianoDigital from "../imgs/piano-digital.svg"
import arrowBack from "../imgs/arrow-banner.svg"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "../index.css"

export function Banner1(){

    const [positionIndexes, setPositionIndexes] = useState([0,1,2])

    useEffect(() => {
        const interval = setInterval(() => {
            setPositionIndexes((prevIndexes) => {
                // Atualiza os índices para que o índice 2 vá para 1, 1 vá para 0, e 0 vá para 2
                const updatedIndexes = [
                    prevIndexes[2], // Índice 2 vira o novo 0
                    prevIndexes[0], // Índice 0 vira o novo 1
                    prevIndexes[1], // Índice 1 vira o novo 2
                ];
                return updatedIndexes;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);


    

    const images = [
        pianoCauda,
        pianoArmario,
        pianoDigital
    ]

    const labels = [
        'Piano de <br>Cauda',
        'Piano <br>Digital',
        'Piano de <br>Armário',
    ]

    const positions = [
        'center', 
        'right',
        'right1'
    ]

    const [imageVariants, setImageVariants] = useState({
        center: {x: '40%', scale:1, zIndex: 3},
        right: {x: '133%', scale:0.6, zIndex: 2},
        right1: {x: '200%', scale:0.5, zIndex: 1},
    })
    
    useEffect(() => {
        const updateVariants = () => {

            if (window.innerWidth > 1280) {
                setImageVariants({
                    center: { x: "40%", scale: 1, zIndex: 3 },
                    right: { x: "133%", scale: 0.6, zIndex: 2 },
                    right1: { x: "200%", scale: 0.45, zIndex: 1 },
                });
            } else if (window.innerWidth > 630) {
                setImageVariants({
                    center: { x: "70%", scale: 1, zIndex: 3 },
                    right: { x: "160%", scale: 0.7, zIndex: 2 },
                    right1: { x: "225%", scale: 0.5, zIndex: 1 },
                });
            } else {
                setImageVariants({
                    center: { x: "105%", scale: 1, zIndex: 3 },
                    right: { x: "200%", scale: 0.7, zIndex: 2 },
                    right1: { x: "225%", scale: 0.5, zIndex: 1 },
                });
            }
        };

        updateVariants(); // Atualiza na montagem
        window.addEventListener("resize", updateVariants); // Atualiza no resize

        return () => window.removeEventListener("resize", updateVariants);
    }, []);

    return (

        <>
            <div className="flex items-center flex-col justify-center sm:h-[86vh] h-[40vh] sm:mt-0 mt-24 ">

            <div className="flex flex-col">
                {labels.map((label, index)=>(
                    <motion.div
                        key={index}
                        className="text-black 2xl:text-8xl xl:text-7xl lg:text-[4rem] sm:text-[3rem] text-[2rem] lg:left-40 sm:left-10 left-5  font-forum mb-32 lg:bottom-52 sm:bottom-72 mt-24 sm:mt-0 "
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        style={{position: 'absolute'}}
                        dangerouslySetInnerHTML={{
                        __html: labels[positionIndexes[0]],
                    }}
                    >
                    </motion.div>
                ))}  
                <div className="absolute xl:left-40 lg:left-32 sm:left-3 -left-7 xl:bottom-48 lg:bottom-60 sm:bottom-80 sm:bottom-[45%] mt-44 ">
                    <img className="xl:scale-75 sm:scale-50 scale-[0.3]" src={arrowBack} alt="" />
                </div>
            </div>
                <div className=" w-[32rem] h-[32rem]">
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            className={'rounded-lg xl:w-[28rem] xl:h-[34rem] lg:w-[20rem] lg:h-[25rem] sm:w-[16rem] sm:h-[20rem] w-[12rem] h-[16rem]'}
                            initial="center"
                            animate ={positions[positionIndexes[index]]}
                            variants={imageVariants}
                            transition={{duration: 0.5}}
                            style={{position: 'absolute', objectFit: 'cover'}}
                            
                        />
                    ))}

                </div>
            </div>
        </>
    )
}