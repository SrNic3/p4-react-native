import React, { Component } from 'react';
import {StyleSheet, Text } from 'react-native';

var Cabecera = React.createClass({
 render: function () {
 return (
	<Text style={styles.cabecera}>
		{this.props.texto}
		{this.props.turnos}
	</Text>
 )
 }
});

const styles = StyleSheet.create({
cabecera: {
padding: 5,
fontSize: 20
}
});

module.exports = Cabecera;
