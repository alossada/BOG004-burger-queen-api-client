import React from 'react'
import Style from '../styles/admin.module.css'

export default function UserTable() {
  return (
    <table>
    <thead>
      <tr>
        <th>Email</th>
        <th>Rol</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Email data</td>
        <td>Rol data</td>
        <td>
          <button className={Style.button}>Editar</button>
          <button className={Style.button}>Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
  )
}
