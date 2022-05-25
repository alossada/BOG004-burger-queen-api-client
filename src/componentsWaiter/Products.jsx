import React from 'react'
import { useEffect, useState } from 'react'
import { products } from '../Providers/OrderPetitions'
import { getToken } from '../Providers/UserPetitions'
import Menu from './Menu'

export default function ProductsMenus({handleAddProduct}) {

  const [FilterProducts, setFilterProducts] =useState([]);
  const token = getToken();
  // console.log('getToken', token.accessToken);

  useEffect(()=>{
    products(token.accessToken) // llamamos a la función products() que está en el provider
      .then((response) => {
        // console.log('Esto es la respuesta del GET', response)
        setFilterProducts(response.data)
        // actualizamos el estado 
        // console.log('respuesta de la data',response.data) 
      })
      .catch(() => {});
  },[]);

    return (
      <div className='allProducts'>
      {FilterProducts.map((products) => {
        return(
          <div className='containerList'>
            <Menu
              key={"ord" + products.id}
              id={products.id}
              handleAddProduct={handleAddProduct}
              name={products.name}
              price={products.price}
              image={products.image}
              type={products.type}
            />
          </div>
        )
      })}
    </div>

  )
}
