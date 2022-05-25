import React from 'react'
import ProductsMenu from './Products'
import SummaryProduct from './SummaryProduct'

export default function Order() {
  return (
    <div> 
    <div>
      <h1 style={{color:"#f1f1f1"}}>Estas son las ordenes </h1>
    </div>
    <div className='productos' >
      <ProductsMenu  />
    </div>
    <div className='resumen' >
      <SummaryProduct />
    </div>
</div>
  )
}
