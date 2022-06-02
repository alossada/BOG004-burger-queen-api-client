import React from 'react'
import Style from '../styles/chef.module.css'

export default function Items({products}) {
    console.log('deberia ser array',products)
  return (
    <div>
      {products.map((product, index)=>{
          return(
              <div  key={index}>
                <p className = {Style.containerItems}>✔️{product.name}</p>
              </div>
          )
      })}
    </div>
  )
}
