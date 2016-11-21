import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

let Reinicia = React.createClass({
 reiniciaClick: function () {
	
	this.props.manejadorReiniciaClick();

 },
 render: function () {
 return (
 	<TouchableHighlight style={styles.reiniciaStyle}
	onPress={this.reiniciaClick}>
	<Text style={styles.reiniciaStyleText}>Reiniciar partida</Text>
</TouchableHighlight>


 )
 }
});

const styles = StyleSheet.create({

reiniciaStyle: {
	flex:0,
	height:60,
	marginTop:10,
padding: 10,
alignItems: "center",
borderWidth: 1,
borderColor: "black"
},
reiniciaStyleText: {
fontSize: 30
}
});

module.exports = Reinicia;
