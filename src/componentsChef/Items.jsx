import React from 'react'
import Style from '../styles/chef.module.css'

export default function Items({products}) {
  return (
    <div>
      {products.map((prod, index)=>{
        return(
              <div  key={index}>
                <p className = {Style.containerItems}>✔️{prod.product.name}</p>
              </div>
          )
      })}
    </div>
  )
}
