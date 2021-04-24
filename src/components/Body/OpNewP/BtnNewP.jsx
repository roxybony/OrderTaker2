import React  from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button/Button';



const BtnNewP=({onClickClientes})=>{
    return(
        <div className="">
            <div className="btntxarea"><Button className="btntxarea" text="Nuevo Pedido" onClickHandler={onClickClientes}/></div>
            
            
            
        </div>
    )
}
BtnNewP.propTypes={

onClickClientes: PropTypes.func.isRequired
}
export default BtnNewP