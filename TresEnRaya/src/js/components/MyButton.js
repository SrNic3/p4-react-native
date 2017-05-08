import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';


var MyButton = React.createClass({
render: function(){
return (
<TouchableHighlight onPress={this.props.onPress}>
<Text style={styles.mybutton}>{this.props.text}</Text>
</TouchableHighlight>
)
}
});
const styles = StyleSheet.create({
mybutton: {
flex:0,
height:40,
margin:10,
marginRight:10,
marginLeft:10,
padding: 10,
alignItems: "center",
borderWidth: 1,
fontSize: 20,
borderColor: "black"
}
});
export default MyButton;