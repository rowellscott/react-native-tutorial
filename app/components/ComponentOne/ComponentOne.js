import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


type Props = {};
export default class ComponentOne extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      name: 'Brad',
      showName: true,
      message: this.props.message
    }
  }

  static defaultProps ={
    message: 'Hi There'
  }
  
  
  render() {
    let name = this.state.showName ? this.state.name : 'No name';
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>
          Welcome to MyApp!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> */}
        <Text>{this.state.message}</Text> 
        <Text>{name}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

