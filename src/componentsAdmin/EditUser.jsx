import React from 'react'
import { useForm } from 'react-hook-form';
import Style from '../styles/admin.module.css'

export default function EditUser(props) {
  console.log('PROPS DESDE EDIT',props.currentUser)

  const {register, handleSubmit, formState: { errors }, setValue} = useForm({
    defaultValues:props.currentUser
  });

  setValue('email',props.currentUser.email);
  setValue('password',props.currentUser.password);
  setValue('rol',props.currentUser.rol);

  const onSubmit = (data, e) => {
    //console.log(data)
    data.id = props.currentUser.id
  
    props.updateUser(props.currentUser.id, data)
    
    //limpia los campos
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Correo</label>
      <input type="text" name="email" {...register("email", {
                required: {value: true, message: 'Campo Requerido'}
            })}
      />
      <div>
        {errors?.email?.message}
      </div>
      <label>Contraseña</label>
      <input type="password" name="password" {...register("password", {
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
      <button className={Style.button_editar_send}>Editar</button>
    </form>
  )
}
