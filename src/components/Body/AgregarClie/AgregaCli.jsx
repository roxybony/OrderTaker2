import BotonesOp from '../AgregarClie/BotonesOp'
import Tabla from '../AgregarClie/TablaClie'



function AgregarClie() {
  const clickHandlerFuntion = (text)=>{
    console.log("el rexto recibido es :",text);
  }

  return (
    <main>
      
      <div className="react-calculator">
        <div className="BuscarPed">
          <Tabla />
          
        </div>

        <div className="Opciones">
          <BotonesOp
          onClickOpcionG={opcion => console.log(opcion)}
          onClickOpcionC={opcion => console.log(opcion)}
          />
        </div>
        
      </div>
    </main>
  );
}

export default AgregarClie;

