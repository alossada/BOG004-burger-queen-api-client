import React from 'react'
import Style from '../styles/chef.module.css'
import image from '../assets/logo.png'
import SummaryPendingsOrders from '../componentsChef/SummaryPendingsOrders'
import SummaryReadyOrders from '../componentsChef/SummaryReadyOrders'

export default function Chef() {
  return (
      <>
        <section className={Style.container_chef}>
          <img className={Style.logo}src={image} alt="burger" />
            <div className={Style.container_Orders}> 
              <div className='cocinando' >
                <h2 style={{color:'#FE8D06', textAlign:'center'}}>Cocinando</h2>
                <SummaryPendingsOrders/>
              </div>
              <div style={{color:'#FE8D06', textAlign:'center'}}>
                <SummaryReadyOrders/>
              </div>
            </div>
        </section>
        </>
  )
}
