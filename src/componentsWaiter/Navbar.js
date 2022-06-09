import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router'
import { BiLogOut } from 'react-icons/bi'
import Style from '../styles/waiter.module.css'
import image from '../assets/logo.png'

    export default function NavBar(props) {
      const navigate = useNavigate();
      const logOut=()=>{
        sessionStorage.clear();
        navigate('/')
      }
      return (
        <div>
            <nav className={Style.container_waiter_nav}>
              <img className='home-header-logo' src={image} alt="logotipo" />
                <Link to='/waiter/order'className={Style.waiter_text} style={{color:'#f1f1f1',fontWeight:'700'}} >{props.text1}</Link>
                <Link to='/waiter/ready'className={Style.waiter_text} style={{color:'#F1f1f1',fontWeight:'700'}}>{props.text2}</Link>
                <Link to='/waiter/delivered'className={Style.waiter_text} style={{color:'#F1f1f1',fontWeight:'700'}}>{props.text3}</Link>
                <BiLogOut className={Style.iconLogout} onClick={logOut}/>
            </nav>
            <section>
              <Outlet />
            </section>
        </div>
      )
    }
