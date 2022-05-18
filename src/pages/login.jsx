// import React, { Fragment } from "react";
import { Formik, Form, Field} from "formik";
import Styles from '../styles/login.module.css'
import image from '../assets/logo.png' 
import { Fragment } from "react";


const Formulario = () => {
	return ( 
    <>
      <div className={Styles.contenedor}>
          <img src={image} alt="" />
        <Formik
          initialValues={{
            email:'',
            password:''
          }}
          validate={(valores)=>{
            let errores = {}; //Array objetos para imprimir los errors
      //-------- validación para el correo -------- 👇
            if(!valores.email){
              errores.email = 'Por favor ingresa un email'
            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
              errores.email = 'El correo es incorrecto'
            }

            //-------- validación para la contraseña -------- 👇
            if(!valores.password){
              errores.password = 'Por favor ingresa tu contraseña'
            }else if(!/^(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(valores.password)){
              errores.password = 'La contraseña es incorrecta'
            }else if (valores.password.length > 6) {
              errores.password = 'debe contener 6 caracteres!';
            }
            return errores;
          }}
          onSubmit={(valores, {resetForm}) => {
            resetForm();
            console.log('Formulario enviado');
          }}
        >
          {({values, errors, touched}) => (
            <Form className={Styles.formulario}>
              <div>
                <label htmlFor="email" className={Styles.formulario_label}>Correo</label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="usuario@bq.com"
                />
                {/* <ErrorMessage name="email" component={()=>{}} /> */}
                {touched.email && errors.email && <div className={Styles.error}>{errors.email}</div>}
              </div>
              <div>
                <label htmlFor="password" className={Styles.formulario_label}>Contraseña</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                />
                {touched.password && errors.password && <div className={Styles.error}>{errors.password}</div>}
              </div>
              <div className={Styles.formulario_container_buttons}>
                <button type="submit" className={Styles.formulario_container_button_ingresar}>Ingresar</button>
                <button type="submit" className={Styles.formulario_container_button_regrersar}>Regresar</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
	);
}

export default Formulario;