import React from "react";
import { Formik } from "formik";
import Styles from '../styles/login.module.css'


const Formulario = () => {

	return (    
		<div className={Styles.contenedor}>
      <Formik
        onSubmit={() => {
          console.log('Formulario enviado');
        }}
      >
        {(props) => (
          <form className={Styles.formulario} onSubmit={props.handleSubmit}>
            <div>
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" name="email" placeholder="correo@burger.com"/>
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" placeholder="******"/>
            </div>
            <button type="submit">Ingresar</button>
          </form>
        )}
      </Formik>
		</div>
	);
}

export default Formulario;