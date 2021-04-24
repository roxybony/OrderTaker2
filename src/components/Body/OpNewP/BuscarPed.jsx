import React  from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button/Button';

    const BuscarPed=({onClickSearch})=>{
        return(
            <div className="search">
                <input type="search" placeholder="Buscar persona"/>
                <Button text="Buscar" onClickHandler={onClickSearch}/>
            </div>
        )
    }
BuscarPed.propTypes={
    onClickSearch:PropTypes.func.isRequired,
}
export default BuscarPed