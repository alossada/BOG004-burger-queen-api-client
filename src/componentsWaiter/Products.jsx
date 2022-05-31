import React from 'react'
import { useEffect, useState } from 'react'
import { products } from '../Providers/OrderPetitions'
import { getToken } from '../Providers/UserPetitions'
import Menu from './Menu'
import Style from '../styles/waiter.module.css'

export default function ProductsMenus({handleAddProduct}) {

  const [FilterProducts, setFilterProducts] =useState([]);
  const token = getToken();

  useEffect(()=>{
    products(token.accessToken) // llamamos a la función products() que está en el provider
      .then((response) => {
        setFilterProducts(response.data)
      })
      .catch(() => {});
  },[]);

    return (
      <div className={Style.allProducts}>
      {FilterProducts.map((products, index) => {
        return(
          <div key={index.toString()} className='containerList'>
            <Menu
              id={products.id}
              handleAddProduct={handleAddProduct}
              name={products.name}
              price={products.price}
              image={products.image}
              type={products.type}
              item={products}
            />
          </div>
        )
      })}
    </div>

  )
}
