import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class Teclas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  opciones = () => {
    const { valor, onPress } = this.props;
    onPress(valor);
  };

  render() {
    const { valor } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={this.opciones}>
        <Text style={styles.text}>{valor}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
  }
});
