import React, { Component } from 'react';
import {StyleSheet, ListView,Text } from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var playList = React.createClass({

	componentWillMount: function(){
		this.state = {
      		dataSource: ds.cloneWithRows(["Inicio de la partida:"]),
    	};
	},

	updateDataSource: function(history){
		this.state = {
      		dataSource: ds.cloneWithRows(history),
    	};
	},

	render: function(){
		this.updateDataSource(this.props.state.historial);
		return (
			<ListView style={styles.mybutton}
        		dataSource={this.state.dataSource}
        		renderRow={(rowData) => <Text>{rowData}</Text>}/>
		);
	}

});


const styles = StyleSheet.create({
mybutton: {
	height: 10,
padding: 6,
margin: 2,
backgroundColor: 'white',
borderWidth: 3,
borderColor: 'black'
}
});



export default playList;
