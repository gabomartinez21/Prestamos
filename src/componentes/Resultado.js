//Este componente es diferente. Es una Stateless functional component
//A diferencia d elos otros aqui no se utiliza this.props ni se importan de componentes
//Los props se utlizan sin el this

import React from 'react'


const Resultado = (props) => {
     return ( 
          <div className='u-full-width resultado'>
               <h2>Resultado</h2>
               <p>La cantidad solicitada fue $ {props.cantidad}</p>
               <p>A pagar en: {props.plazo} Meses</p>
               <p>Total a pagar: $ {props.total}</p>
               <p>Su pago mensaul es de $ {(props.total/props.plazo).toFixed(2)}</p>
          </div>
      );
}
 
export default Resultado;