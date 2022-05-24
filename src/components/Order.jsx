import React from 'react'
import { useEffect, useState } from 'react'
import { products } from '../Providers/OrderPetitions'
import { getToken } from '../Providers/UserPetitions';

export default function Order({handleAddProduct}) {

  const [productos, setProductos] = useState([]); 
  console.log('Un banderita', sessionStorage);
  const token = getToken();
  console.log('getToken', token.accessToken);

  useEffect(()=>{
    products(token.accessToken) // llamamos a la función products() que está en el provider
      .then((response) => {
        console.log(sessionStorage);
        console.log('Esto es la respuesta del GET', response)
        setProductos(response.data); // actualizamos el estado  
        console.log('Set de productos', setProductos(response.data));      
      })
      .catch(() => {});
  }, []);


  return (
    <div>
      <h2 style={{color:'#bde0fe'}}>menu de ordenes</h2>
    </div>
  )
}
