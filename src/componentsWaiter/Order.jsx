import React from 'react'
import ProductsMenu from './Products'
import SummaryProduct from './SummaryProduct'
import Style from '../styles/waiter.module.css'
import { CartProvider } from 'react-use-cart'

export default function Order() {
  return (
    <>
      <CartProvider>
        <div className={Style.container_Orders}> 
            {/* <h1 style={{color:"#f1f1f1"}}>Estas son las ordenes</h1> */}
            <div className='productos' >
              <ProductsMenu  />
            </div>
            <div className='resumen' >
              <SummaryProduct />
            </div>
        </div>
      </CartProvider>
    </>
  )
}
