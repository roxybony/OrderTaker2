
import TablaAgrP from './TablaAgrP'
import BotonesP from './BotonesdeP';



function AgregarPed() {
  const clickHandlerFuntion = (text)=>{
    console.log("el rexto recibido es :",text);
  }

  return (
    <main>
      
      <div className="react-calculator">
        
        <div className="Opciones">
          <BotonesP
          onClickOpcionG={opcion => console.log(opcion)}
          onClickOpcionC={opcion => console.log(opcion)}
          />
        </div>
        <div className="BuscarPed">
          <TablaAgrP  />
          
        </div>

      </div>
    </main>
  );
}

export default AgregarPed;