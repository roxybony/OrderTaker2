import React  from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const BotonesdeP =({onClickOpcionG,onClickOpcionC})=>
    {
        return(<>
        <Button type="btnOpCli1" text= "Guardar Cambios" clickHandler={onClickOpcionG}/>
        <Button type="btnOpCli2" text= "Cancelar" clickHandler={onClickOpcionC}/>  
         </>
        ) 
        }
BotonesdeP.propTypes={
onClickOpcionG: PropTypes.func.isRequired,
onClickOpcionC: PropTypes.func.isRequired

}
export default BotonesdeP