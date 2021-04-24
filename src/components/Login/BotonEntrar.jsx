import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const BotonEntrar=({onClickLogin,onClickCreate})=>{
    return(
        <>
        <Button type="login" text="Login" onClickHandler={onClickLogin}/>
        <p className="text-center">ó</p>
        <Button type="create" text="Crea una cuenta" onClickHandler={onClickCreate}/>
        </>
    );
}
BotonEntrar.propTypes={
    onClickLogin:PropTypes.func.isRequired,
}
export default BotonEntrar;