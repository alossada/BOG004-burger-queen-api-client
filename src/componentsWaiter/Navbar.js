import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import Style from '../styles/waiter.module.css'
import image from '../assets/logo.png'

    export default function NavBar(props) {
      return (
        <div>
            <nav className={Style.container_waiter_nav}>
              <img className='home-header-logo' src={image} alt="logotipo" />
                <Link to='/waiter/order'className={Style.waiter_text} style={{color:'#f1f1f1',fontWeight:'700'}} >{props.text1}</Link>
                <Link to='/waiter/ready'className={Style.waiter_text} style={{color:'#F1f1f1',fontWeight:'700'}}>{props.text2}</Link>
            </nav>
            <section>
              <Outlet />
            </section>
        </div>
      )
    }
