import React  from 'react'
import PropTypes from 'prop-types'
import Drop1 from './DropBottonM'
import Drop2 from './DropBottonT'
import Drop3 from './DropBottonE'
const TablaAgrP =({})=>(
    <section className="posicion">
        <table>
             <tr>
            <th className="titulos">Marca</th> 
            <th className="titulos">Nombre</th>
            <th className="titulos2">Talla</th>
            <th  className="titulos">     Clave</th>
            <th>Cantidad</th>
            <th className="titulos2">   Estado    </th>
            <th>Fecha de Pedido</th>
            </tr>
            <tr>
            <td> <Drop1/> </td>
            <td>  Edredon Dalia</td>
            <td>  <Drop2/></td>
            <td>  86253</td>
            <td> 1 </td>
            <td> <Drop3/></td>
            <td> 22/04/2021 </td>
            </tr>
            <tr>
            <td> <Drop1/> </td>
            <td>  </td>
            <td>  <Drop2/></td>
            <td>  </td>
            <td> </td>
            <td> <Drop3/> </td>
            <td>  </td>
            </tr>

        </table>
   
    
     </section>
     
)

export default TablaAgrP