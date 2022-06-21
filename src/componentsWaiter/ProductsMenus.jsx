import React from 'react'
import { useEffect, useState } from 'react'
import { products} from '../Providers/OrderPetitions'
import { getToken } from '../Providers/UserPetitions'
import Menu from './Menu'
import Style from '../styles/waiter.module.css'

export default function ProductsMenus() {

  //---Variable de estado para productos seleccionados---//
const [FilterProducts, setFilterProducts] =useState([]);

//---Funcion para obtener 
const token = getToken();

useEffect(()=>{
  products(token) // Se resuelve peticion que obtiene los productos
    .then((response) => {
      setFilterProducts(response.data)
    })
    .catch(() => {});
},[token]);

  //--Retorna el menu componente menu con sus elementos---// 
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
};
