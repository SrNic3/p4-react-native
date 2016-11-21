
const Reinicia = require('./Reinicia');
const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
const VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
const Cabecera = require('./Cabecera');
const Tablero = require('./Tablero');

import IndexScene from '../../../inicio';
import PartidaScene from '../../../partida';

var App = React.createClass({
 getInitialState: function () {
 return {
 turno: JUGADORX,
 valores: VALORES,
 terminado: false,
 nTurnos: 0
 };
 },

appClick: function (numeroFila, numberoColumna) {

if(!this.state.terminado){
 let valores = this.state.valores;
 let nuevoValor = this.state.turno === JUGADORX ? 'X' : '0';
 valores[numeroFila][numberoColumna] = nuevoValor;

 this.setState({
 turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
 valores: this.state.valores,
 nTurnos: this.state.nTurnos + 1
 });

 }
 },


reiniciaClick: function() {

	console.log(this.state.valores);
	this.setState({
		turno: JUGADORX,
		 valores: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
		 terminado: false,
		 nTurnos: 0
 });


 },

checkWin: function (valores) {


		//FILAS
	if ((valores[0][0]!='-')&&(valores[0][0]===valores[0][1])&&(valores[0][1]===valores[0][2]))
		return this.alertWin();
	if ((valores[1][0]!='-')&&(valores[1][0]===valores[1][1])&&(valores[1][1]===valores[1][2]))
		return this.alertWin();
	if ((valores[2][0]!='-')&&(valores[2][0]===valores[2][1])&&(valores[2][1]===valores[2][2]))
		return this.alertWin();
	

		//COLUMNAS
	if ((valores[0][0]!='-')&&(valores[0][0]===valores[1][0])&&(valores[1][0]===valores[2][0]))
		return this.alertWin();
	if ((valores[0][1]!='-')&&(valores[0][1]===valores[1][1])&&(valores[1][1]===valores[2][1]))
		return this.alertWin();
	if ((valores[0][2]!='-')&&(valores[0][2]===valores[1][2])&&(valores[1][2]===valores[2][2]))
		return this.alertWin();


		//DIAGONALES
	if ((valores[0][0]!='-')&&(valores[0][0]===valores[1][1])&&(valores[1][1]===valores[2][2]))
		return this.alertWin();
	if ((valores[0][2]!='-')&&(valores[0][2]===valores[1][1])&&(valores[1][1]===valores[2][0]))
		return this.alertWin();


	if (this.state.nTurnos>=9)
		alert("Empate");

 },

 alertWin: function(){

 	if(!this.state.terminado){

 		 var turno = this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX;
 			alert("Ha ganado "+turno+"!");

 			this.setState({
				terminado: true
				});	

 	}

 },


componentDidUpdate: function(prevProps, prevState) {
 	let valores = this.state.valores;
 		  this.checkWin(valores);
 },


 render: function () {
 var texto = "Turno del " + this.state.turno;
 var turnos = "Número de movimientos: "+this.state.nTurnos;
 const routes = [
		{title: 'Index', index: 0},
		{title: 'Partida', index: 1},
	];
 
return (
	<Navigator
		initialRoute={routes[0]}
		initialRouteStack={routes}
		renderScene={(route, navigator) => {
			var onForward = function(){
			const nextIndex = route.index + 1;
			if(typeof routes[nextIndex] == "object"){
			navigator.push(routes[nextIndex])
			}
			}
			var onBack = function(){
			if (route.index > 0){
			navigator.pop();
			}
			}
			switch(route.index){
			case 0:
			return <IndexScene onForward={onForward} onBack={onBack} />
			case 1:
			return <PartidaScene onForward={onForward} onBack={onBack} state={this.state} 
			appClick={this.appClick} reiniciaClick={this.reiniciaClick}/>
			}
		}}/>
 );
}
});

module.exports = App;


