import React from 'react'
import { useEffect, useState } from 'react'
import { products} from '../Providers/OrderPetitions'
import { getToken } from '../Providers/UserPetitions'
import Menu from './Menu'
import Style from '../styles/waiter.module.css'

export default function ProductsMenus() {

  const [FilterProducts, setFilterProducts] =useState([]);
  const token = getToken();

  useEffect(()=>{
    products(token.accessToken) // llamamos a la función products() que está en el provider en OrderPetitions
      .then((response) => {
        setFilterProducts(response.data)
      })
      .catch(() => {});
  },[token.accessToken]);

    return (
      <div className={Style.allProducts}>
        {FilterProducts.map((products, index) => {
          return(
            <div key={index} className='containerList'>
              <Menu
                id={products.id}
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
