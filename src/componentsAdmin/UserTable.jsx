import React from 'react'
import Style from '../styles/admin.module.css'

export default function UserTable(props) {
  // console.log('PROPS', props)
  return (
    <table className={Style.container_adminTable}>
      <thead>
        <tr>
          <th>Nombre</th>          
          <th>Rol</th>          
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.length > 0 ?
          props.users.map((user, index) => (
            <tr key={index} >
              <td>{user.email}</td>              
              <td>{`${Object.keys(user.rol)}`}</td>
              <td className={Style.conatiner_buttons}>
                <button 
                className={Style.button_editar}
                onClick={
                  ()=> {props.editRow(user)}
                }                
                >
                  Editar
                </button>
                <button 
                  className={Style.button_eliminar}
                  onClick={() => {props.deleteUser(user.id, user)}}
                >
                  Eliminar</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={3}>No existen empleados</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}
