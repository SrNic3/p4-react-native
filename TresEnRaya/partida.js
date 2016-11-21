import React, { Component } from 'react';
import { View } from 'react-native';
import MyButton from './src/js/components/MyButton';
import Reinicia from './src/js/components/Reinicia';


// var TresEnRayaStore = require('./src/js/stores/TresEnRayaStore');
const Cabecera = require('./src/js/components/Cabecera');
const Tablero = require('./src/js/components/Tablero');

var PartidaScene = React.createClass({


render: function(){
// var texto = "Turno del " + state.turno;
var state = this.props.state;
return (
<View style={{flex: 1, margin: 10}}>
 <Cabecera texto={"Turno del "+state.turno}/>
 <Cabecera turnos={"Número de movimientos: "+state.nTurnos}/>
 <Tablero valores={state.valores}
 manejadorTableroClick={this.props.appClick}/>
 <Reinicia manejadorReiniciaClick={this.props.reiniciaClick}/>
 <MyButton onPress={this.props.onBack} text={"Volver al inicio"}/>
 </View>
)
}
});

export default PartidaScene;