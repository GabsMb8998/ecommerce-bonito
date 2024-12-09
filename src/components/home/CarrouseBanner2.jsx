
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ItemBanner2 } from './ItemBanner2';

// img
import banner21 from "../../imgs/banner2-1.svg"
import banner22 from "../../imgs/banner2-2.svg"
import banner23 from "../../imgs/banner2-3.svg"

export  function CarrouselBanner2() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const produtosPiano =[
            {
                id: 1,
                name: 'estudos',
                image: banner21,
            },
            {
                id: 2,
                name: 'shows',
                image: banner22,
            },
            {
                id: 3,
                name: 'concertos',
                image: banner23,
            },
        ]
        setProducts(produtosPiano)
    }, [])
    


    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '630px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '630px',
            numVisible: 2,
            numScroll: 1
        },

    ];

    const productTemplate = (product) => {
        return (
           <ItemBanner2 img={product.image} label={product.name}/>
        );
    };

    return (
        <div className="card lg:hidden ">
            <Carousel 
            value={products} 
            numScroll={1}
            numVisible={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
            showNavigators={false}
            touchEnabled={true} 
            circular={true}/>
        </div>
    )
}
        