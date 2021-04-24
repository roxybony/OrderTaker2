import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownItem,DropdownMenu, DropdownToggle} from 'reactstrap';

const DropBottonE=({})=>{
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
                    Estado
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={()=>clickAction("Estado1")}>Estado1</DropdownItem>
                    <DropdownItem onClick={()=>clickAction("Estado2")}>Estado2</DropdownItem>
                    <DropdownItem onClick={()=>clickAction("Estado3")}>Estado3</DropdownItem>
                   
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
export default DropBottonE;