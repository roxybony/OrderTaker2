import React  from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button/Button';



const Clientes=({onClickClientes})=>{
    return(
        <div className="">
            <div className="result" >
                <textarea className="textareacli" name="text1" id="" cols="40" rows="10">Maria Guadalupe Hernandez
                </textarea>
            </div>
            
            
        </div>
    )
}
Clientes.propTypes={

onClickClientes: PropTypes.func.isRequired
}
export default Clientes