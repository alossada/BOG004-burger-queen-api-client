import React from 'react'
import UserTable from '../componentsAdmin/UserTable'
import Style from '../styles/admin.module.css'


export default function Admin({ id }) {
  
  return (
    <div className={ Style.container}>
      <h1>Administrador</h1>
      <div className={Style.flex_row}>
        <div className={Style.flex_large}>
          <h2>Agregar Usuario</h2>
        </div>
        <div className={Style.flex_large}>
          <h2>Ver Usuarios</h2>
          <UserTable />
        </div>
      </div>
    </div>
  )
}
