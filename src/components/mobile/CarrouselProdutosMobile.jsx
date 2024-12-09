import { Carousel } from 'primereact/carousel';
import { Produto } from '../Produto';
import React, { useState, useEffect } from 'react';
import produto from "../../imgs/produto.svg"


export  function CarrouselProdutosMobile() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const produtosPiano =[
            {
                id: 1,
                name: 'Yamaha sei la',
                image: produto,
                preco: '78.000'
            },
            {
                id: 2,
                name: 'Cassio s300',
                image: produto,
                preco: '1000'
            },
            {
                id: 3,
                name: 'Cassio s200',
                image: produto,
                preco : '600'
            },
            {
                id: 4,
                name: 'Cassio s200',
                image: produto,
                preco : '600'
            },
            {
                id: 5,
                name: 'Cassio s200',
                image: produto,
                preco : '600'
            },
            {
                id: 6,
                name: 'Cassio s200',
                image: produto,
                preco : '600'
            },
            {
                id: 7,
                name: 'Cassio s200',
                image: produto,
                preco : '600'
            },
        ]
        setProducts(produtosPiano)
    }, [])

    const responsiveOptions = [
        {
            breakpoint: '2020px',
            numVisible: 6,
            numScroll: 1
        },
        {
            breakpoint: '1450px',
            numVisible: 5,
            numScroll: 1
        },
        {
            breakpoint: '1224px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '540px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (product) => {
        return (
            <div className='flex justify-center'>

                <Produto img={product.image} nome={product.name} preco={product.preco}/>
            </div>
        );
    };

    return (
        <div className="card sm:hidden  lg:block my-16">
            <Carousel value={products}
            numScroll={1}
            numVisible={3} 
            responsiveOptions={responsiveOptions} 
            itemTemplate={productTemplate} 
            circular={true}/>
        </div>
    )
}
        
