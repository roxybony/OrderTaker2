import React from 'react';
import Formulario from './Formulario';
import BotonEntrar from './BotonEntrar';

const Login=()=>{
    return(
        <div className="bglogin">
        <div className="loginstyle">
        <Formulario/>
        <br/>
        <BotonEntrar 
        onClickLogin={()=>console.log("Se ha clickeado Login")}
        onClickCreate={()=>console.log("Crear cuenta nueva")}
        />
        </div>
        </div>
    );
}
export default Login;