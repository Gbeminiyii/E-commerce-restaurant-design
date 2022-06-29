import React from 'react'
import { productData } from './Data'
import { Card, ProductCard, ProductContainer, ProductText, ProductWrapper } from './ProductsElements'

const Products = () => {
  return (
    <ProductContainer>
        <ProductWrapper>
            <ProductText>Choose your favorite</ProductText>
            <ProductCard>
                {productData.map(product => 
                <Card key={product.price}>
                    <img src={product.img} alt={product.alt} />
                    <h2>{product.name}</h2>
                    <p>{product.desc}</p>
                    <span>{product.price}</span><button>{product.button}</button></Card>
                )}
            </ProductCard>
        </ProductWrapper>
    </ProductContainer>
  )
}

export default Products