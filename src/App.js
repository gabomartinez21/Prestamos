import React, {Component, Fragment} from 'react';
//Fragment me va a permitir retornar un mismo componente sin la necesidad de estar agregagndo un div o un elemento padre
import './normalize.css';
import './skeleton.css';

import Formulario from './componentes/Formulario';
import {calcularTotal} from './helpers'
import Resultado from './componentes/Resultado';
import Mensaje from './componentes/Mensajes';
import Carga from './componentes/Carga';

class App extends Component {

  state = ({
    total:'',
    cantidad:'',
    plazo:'',
    cargando:false
  })

  //Siempre se envian props desde el componente padre hacia al componente más pequeño

  datosPrestamo = (cantidad,plazo) => {
    const total = calcularTotal(cantidad,plazo);

    //Colocar el resultado en el state
    this.setState({
      cargando:true
    },()=>{
      setTimeout(()=>{
        this.setState({
          total,
          cantidad,
          plazo,
          cargando:false
        })
      },3000)
    })
  }

  render(){
    const {total,cantidad,plazo, cargando} = this.state;

    //Cargar un componente condicionalmente
    let componente;
    if(total === '' && !cargando){
      componente = <Mensaje />
    }else if(cargando){
      componente = <Carga/>
    }else{
      componente = <Resultado
                      total={total}
                      plazo={plazo}
                      cantidad={cantidad}
                    />
    }
    return (
      <Fragment>
        <h1>Cotizador de Prestamos</h1>
        <div className="container">
          <Formulario
            datosPrestamo = {this.datosPrestamo}
          />
          <div className="mensajes">
            
            {componente}
          </div>
          

        </div>
      </Fragment>
    );
  }
}

export default App;
