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
