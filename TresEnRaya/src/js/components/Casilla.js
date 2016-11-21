import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const casillaStyle = {
 height: '100px',
 width: '100px'
};

let Casilla = React.createClass({
 casillaClick: function () {
 if (this.props.valor === "-") {
 this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
 }
 },
 render: function () {
 return (
<TouchableHighlight style={styles.casillaStyle}
	onPress={this.casillaClick}
	disabled={this.props.valor !== "-"}>
	<Text style={styles.casillaStyleText}>{this.props.valor}</Text>
</TouchableHighlight>
 )
 }
});

const styles = StyleSheet.create({
casillaStyle: {
flex: 1,
padding: 10,
alignItems: "center",
justifyContent: "center",
borderWidth: 1,
borderColor: "black"
},
casillaStyleText: {
fontSize: 60
}
});

module.exports = Casilla;
