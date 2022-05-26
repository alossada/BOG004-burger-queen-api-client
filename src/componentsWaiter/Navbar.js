import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import Style from '../styles/waiter.module.css'
import image from '../assets/logo.png'

    export default function NavBar(props) {
      return (
        <div>
            <nav className={Style.container_waiter_nav}>
              <img className='home-header-logo' src={image} alt="logotipo" />
                <Link to='/waiter/order' style={{color:'#f1f1f1', fontSize: 25, fontWeight:'700'}} >{props.text1}</Link>
                <Link to='/waiter/ready' style={{color:'#F1f1f1', fontSize: 25, fontWeight:'700'}}>{props.text2}</Link>
            </nav>
            <section>
              <Outlet />
            </section>
        </div>
      )
    }
