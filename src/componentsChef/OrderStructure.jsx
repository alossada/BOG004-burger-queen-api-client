import React from 'react'
import Items from './Items'
import Style from '../styles/chef.module.css'

export default function OrderStructure(props) {
    console.log('soy props', props)
  return (
    <div>
      <div className={Style.containerOrders}>
        <div className={Style.nameDate}>
          <p>{props.cliente}</p>
          <p>{props.date}</p>
        </div>
        <h5>Pedido:</h5>
          <Items 
              products = {props.items.products}
          />
          <button className={Style.btnListo} type='submit'>Listo</button>
          {/* <p style={{color:'#FE8D06', fontWeight:'700'}}>{props.items.status}</p> */}
      </div>
    </div>
  )
}
