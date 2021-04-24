import React  from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const BotonesOp =({onClickOpcionG,onClickOpcionC})=>{
    return(<>
    <Button type="btnOpCli22" text= "Guardar Cambios" clickHandler={onClickOpcionG}/>
    <Button type="btnOpCli11" text= "Cancelar" clickHandler={onClickOpcionC}/>  
     </>
    ) 
    }
BotonesOp.propTypes={
onClickOpcionG: PropTypes.func.isRequired,
onClickOpcionC: PropTypes.func.isRequired

}
export default BotonesOp