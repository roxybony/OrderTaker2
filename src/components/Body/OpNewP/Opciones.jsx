import React  from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Opciones =({onClickOpciones})=>(
    <section className="current">
    <Button text= "Nuevo Pedido" clickHandler={onClickOpciones}/>
    <Button text= "Ultimos Pedidos" clickHandler={onClickOpciones}/>
    <Button text= "Pedidos por fecha" clickHandler={onClickOpciones}/>
    
     </section>
     
)
Opciones.propTypes={
onClickOpciones: PropTypes.func.isRequired,

}
export default Opciones