import { Formik, Form, Field } from "formik"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Styles from '../styles/login.module.css'
import image from '../assets/logo.png'
import { login, saveUser } from "../Providers/UserPetitions"

const LoginForm = () => {

//--- se guarda funcion UseNavigate en constante para navegar a la vista indicada---//
const navigate = useNavigate();

//--- Funcion para cambio de ruta---//
const navigateTo = (role) => {
  return navigate(`/${Object.keys(role)}`);
}

//--- Variable de estado para error de formulario---//
const [userError, setUserError] = useState('');
  
  return (
    <>
      <div className={Styles.contenedor}>
        <img src={image} alt="" />
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={(valores) => {
            let errores = {}; //Array objetos para imprimir los errores
            //-------- validación para el correo -------- 👇
            if (!valores.email) {
              errores.email = 'Por favor ingresa un email'
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
              errores.email = 'El correo es incorrecto'
            }
            //-------- validación para la contraseña -------- 👇
            if (!valores.password) {
              errores.password = 'Por favor ingresa tu contraseña'
            } else if (!/^([0-9]){6,}$/.test(valores.password)) {
              errores.password = 'La contraseña es incorrecta'
            } else if (valores.password.length > 6) {
              errores.password = 'debe contener 6 caracteres!';
            }
            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {            
            let data = { email: valores.email, password: valores.password };
            login(data) //---Se resuelve peticion de login---//
              .then((response) => {
                saveUser(response.data);                
                const activeUser = JSON.parse(sessionStorage.user);
                const userRole = activeUser.user.roles;
                navigateTo(userRole);
              })
              .catch((error) => {
                if(error.message === 'Request failed with status code 400'){
                  setUserError('Usuario y/o contraseña incorrectas');
                }else{
                  setUserError(error.message);
                }          
              })
            resetForm();            
          }}
        >
          {({ errors, touched }) => (
            <Form className={Styles.LoginForm}>
              <div>
                <label htmlFor="email" className={Styles.LoginForm_label}>Correo</label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="usuario@bq.com"
                />
                {touched.email && errors.email && <div className={Styles.error}>{errors.email}</div>}
              </div>
              <div>
                <label htmlFor="password" className={Styles.LoginForm_label}>Contraseña</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                />
                {touched.password && errors.password && <div className={Styles.error}>{errors.password}</div>}
              </div>
              <div className={Styles.LoginForm_container_buttons}>
              {userError && <span data-testid='login-err-message' style={{color:'#F1F1F1'}}>{userError}</span>}
                <button type="submit" className={Styles.LoginForm_container_button_ingresar}>Ingresar</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default LoginForm;