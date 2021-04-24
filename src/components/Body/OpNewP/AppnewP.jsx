import {useState} from 'react';
import BuscarPed from './BuscarPed'
import Opciones from './Opciones'
import Clientes from './Clientes'
import Button from '../../Button/Button';
import AgregarPed from '../AgreagarPedido/AgregarPed'
import BtnNewP from './BtnNewP';


function App() {
  const clickHandlerFuntion = (text)=>{
    console.log("el rexto recibido es :",text);
  }
  const [toggleState,setToggleState]=useState(1);

  const toggleTab=(index)=>{
    setToggleState(index);
  }
  return (
    <main>
      <div className="react-calculator">
        
      <h2>Nuevo Pedido</h2>
        <div className="BuscarPed">
          <BuscarPed 
        onClickSearch= {() => console.log("Presionando buscar nombre:  ")}
        
          />
          
        </div>
        
         <div>
           <Clientes/>
         </div>
         
        </div>
      
        
      
    </main>
  );
}

export default App;