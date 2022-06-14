import React from 'react'
import { useForm } from 'react-hook-form';
import Style from '../styles/admin.module.css'

export default function AddUserForm({addUser}) {
  
  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data, e) => {
    console.log('desde addUser Data', data.email)
    addUser(data)
    
    //limpia los campos
    e.target.reset();
  }

  return (
    <form className={Style.container_form} onSubmit={handleSubmit(onSubmit)}>
      <label>correo</label>
      <input type="text" name="email" {...register("email", {
                required: {value: true, message: 'Campo Requerido'}
            })}
      />
      <div>
        {errors?.email?.message}
      </div>
      <label>contraseña</label>
      <input type="text" name="password" {...register("password", {
                required: {value: true, message: 'Campo Requerido'}
            })}
      />
      <div>
        {errors?.password?.message}
      </div>
      <label>Rol</label>
      <input type="text" name="rol" {...register("rol", {
            required: {value: true, message: 'Campo Requerido'}
        })} />
      <div>
        {errors?.rol?.message}
      </div>
      <button className={Style.button_agregar}>Agregar</button>
    </form>
  )
}
