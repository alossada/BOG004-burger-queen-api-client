import React from 'react'
import AdminController from '../componentsAdmin/AdminController'
import Style from '../styles/admin.module.css'
import Styles from '../styles/chef.module.css'
import { BiLogOut } from 'react-icons/bi'
import image from '../assets/logo.png'
import { useNavigate } from 'react-router'


export default function Admin({ id }) {
  const navigate = useNavigate();
  const logOut=()=>{
    sessionStorage.clear();
    navigate('/')
  }
  
  
  return (
    <>
      <div className={Style.conatiner_admin}>
      <header className={Styles.containerHeader}>
        <figure>
          <img className={Styles.logo}src={image} alt="burger" />
        </figure>
        <figure>
          <BiLogOut className={Styles.iconLogout} onClick={logOut}/>
        </figure>
      </header>
        <AdminController />
      </div>
    </>
  )
}
