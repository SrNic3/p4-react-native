import React, { Component } from 'react';

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
const VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

var App = React.createClass({
 getInitialState: function () {
 return {
 turno: JUGADORX,
 valores: VALORES,
 terminado: false,
 nTurnos: 0
 };
}

});