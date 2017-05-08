import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MyButton from './src/js/components/MyButton';

var IndexScene = React.createClass({
render: function(){
return (
<View>
<MyButton onPress={this.props.onForward} text={"Iniciar partida"} />
<MyButton onPress={this.props.save} text={"Guardar"}/>
 <MyButton onPress={this.props.load} text={"Cargar"}/>
</View>
)
}
});


module.exports = IndexScene;