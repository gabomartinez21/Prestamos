import React, { Component } from 'react';

class Formulario extends Component {
     state = { 
          cantidad:'',
          plazo:''
      }

      actualizarState= (e)=>{
          //  leer lo datos del formulario
          //  console.log(e.target)

           const {name,value} = e.target
           //Actualizar el state
           this.setState({
                [name]:Number(value)
           })
          //  console.log(this.state)


      }

      calcularPrestamo = (e)=>{
          e.preventDefault();
          //Aplicar destruturing
          const {cantidad, plazo} = this.state;
          //Pasar los datos a la funcion
          this.props.datosPrestamo(cantidad,plazo);
      }

      habilitarSubmit = ()=>{
           //Aplicar un destructuring
          const {cantidad,plazo}=this.state;

           //Leer las variables
          const noValido = !cantidad || !plazo;

           //Retornar una respuesta
          //  console.log(noValido);

           return noValido
      }


     //render es la unica funcion obligarotia en un class component
     render() { 
          const {cantidad}=this.state
          return (
               <form onSubmit={this.calcularPrestamo}>
                    <div>
                         <label>Cantidad del prestamo:{cantidad}</label>
                         {/* Normalmente en react se ven las propiedades como en lista */}
                         
                         <input
                              onChange={
                                   this.actualizarState
                              }
                              type="number" 
                              name="cantidad" 
                              className="u-full-width" 
                              placeholder="Ejm. 3000"/>
                    </div>
                    <div>
                         <label>Plazo para pagar:</label>
                         <select  onChange={this.actualizarState} name="plazo" className="u-full-width">
                              <option value="">Seleccione</option>
                              <option value="3">3 Meses</option>
                              <option value="6">6 Meses</option>
                              <option value="12">12 Meses</option>
                              <option value="24">24 Meses</option>
                         </select>
                    </div>
                    <div>
                         <input
                              disabled={this.habilitarSubmit()}
                              type="submit" 
                              value="Calcular" 
                              className="u-full-width button-primary"/>
                    </div>
               </form>

               // La diferencia entre this.funcion y this.funcion() es que la segunda se ejecuta de una vez
          );
     }
}
 
export default Formulario;