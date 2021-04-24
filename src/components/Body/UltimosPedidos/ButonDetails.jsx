import React  from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button/Button';



const ButonDetails=({onClickDetails})=>{
    return(
        <div >
            <div ><Button type="details" text="Ver Más" onClickHandler={onClickDetails}/></div>
            
            
            
        </div>
    )
}
ButonDetails.propTypes={

onClickDetails: PropTypes.func.isRequired
}
export default ButonDetails