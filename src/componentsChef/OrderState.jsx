import React from 'react'
import Items from './Items'
import Style from '../styles/chef.module.css'

export default function OrderState({totalOrders}) {

return (
    <div>
        <div className={Style.containerOrders}>
            <div className={Style.nameDate}>
                <p>{totalOrders.client}</p>
                <p>{totalOrders.dateProcessed}</p>
            </div>
            <h5>Pedido:</h5>
            <Items 
                products = {totalOrders.products}
                qty = {totalOrders.quantity}
            />
        </div>
    </div>
    )
}

