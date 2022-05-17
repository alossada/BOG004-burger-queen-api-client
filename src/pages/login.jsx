import React from "react";

const Formulario = () => {

	return (
		<div className='contenedor'>
			<form className="formulario">
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
		</div>
	);
}
 
export default Formulario;