import React from 'react'
import { useNavigate } from 'react-router'
import { BiLogOut } from 'react-icons/bi'
import Style from '../styles/chef.module.css'
import image from '../assets/logo.png'
import SummaryPendingsOrders from '../componentsChef/SummaryPendingsOrders'
import SummaryReadyOrders from '../componentsChef/SummaryReadyOrders'

export default function Chef() {
  const navigate = useNavigate();
  const logOut=()=>{
    sessionStorage.clear();
    navigate('/')
  }
  
  return (
      <>
        <section className={Style.container_chef}>
          <header className={Style.containerHeader}>
            <figure>
              <img className={Style.logo}src={image} alt="burger" />
            </figure>
            <figure>
              <BiLogOut className={Style.iconLogout} onClick={logOut}/>
            </figure>
          </header>
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
