import React from 'react'
import PropTypes from 'prop-types'



const Button =({type,text,clickHandler}) =>{
    return(
        <button className={type} onClick = {() =>{
            console.log("estamos dentro del clic del boton");
            clickHandler(text);
        }}>
            <span>{text}</span>
        </button>
     
    )
}
Button.protoType={
    type : PropTypes.string,
    text : PropTypes.string.isRequired,
    clickHandler : PropTypes.func.isRequired
}
export default Button