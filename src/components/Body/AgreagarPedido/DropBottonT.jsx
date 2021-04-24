import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownItem,DropdownMenu, DropdownToggle} from 'reactstrap';

const DropBottonT=({})=>{
    const [dropDown,setDropDown]=useState(false);
    const abrirCerrarDropDown=()=>{
        setDropDown(!dropDown);
    }
    const clickAction=(props)=>{
        console.log(props);
    }
    return(
        <div>
            <Dropdown isOpen={dropDown} toggle={abrirCerrarDropDown}>
                <DropdownToggle caret className="dropdown2">
                    Tallas
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={()=>clickAction("Talla1")}>Marca1</DropdownItem>
                    <DropdownItem onClick={()=>clickAction("Talla2")}>Marca2</DropdownItem>
                    <DropdownItem onClick={()=>clickAction("Talla3")}>Marca3</DropdownItem>
                    <DropdownItem onClick={()=>clickAction("Talla4")}>Marca4</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
export default DropBottonT;