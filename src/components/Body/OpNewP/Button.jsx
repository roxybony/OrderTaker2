import React from 'react'
import PropTypes from 'prop-types'



const Button =({type,text,onclickHandler}) =>{
    return(
        <button className={type} onClick = {() =>{
            console.log("estamos dentro del clic del boton");
            onclickHandler(text);
        }}>
            <span>{text}</span>
        </button>
     
    )
}
Button.protoType={
    type : PropTypes.string,
    text : PropTypes.string.isRequired,
    onclickHandler : PropTypes.func.isRequired
}
export default Button