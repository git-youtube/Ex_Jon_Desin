import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Teclas from './components/Teclas';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '0',
      operacion: '',
    };
  }

  opciones = (valor) => {
    if (valor === 'C') {
      this.reiniciarCalculadora();
    } else if (valor === '=') {
      this.OperacionSTR();
    } else {
      this.añadirBarra(valor);
    }
  };

  reiniciarCalculadora = () => {
    this.setState({
      resultado: '0',
      operacion: '',
    });
  };

  añadirBarra = (valor) => {
    const nuevaOperacion = this.state.operacion + valor;
    this.setState({
      operacion: nuevaOperacion,
      resultado: nuevaOperacion,
    });
  };

  OperacionSTR() {
    const opreacionFinal = eval(this.state.operacion)
    this.setState({
      resultado: opreacionFinal,
    });
  }
  render() {
    return (
      <View style={styles.princi}>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
        </View>
        <View style={styles.container}>
          <Teclas valor={9} onPress={this.opciones} />
          <Teclas valor={8} onPress={this.opciones} />
          <Teclas valor={7} onPress={this.opciones} />
        </View>
        <View style={styles.container}>
          <Teclas valor={6} onPress={this.opciones} />
          <Teclas valor={5} onPress={this.opciones} />
          <Teclas valor={4} onPress={this.opciones} />
        </View>
        <View style={styles.container}>
          <Teclas valor={3} onPress={this.opciones} />
          <Teclas valor={2} onPress={this.opciones} />
          <Teclas valor={1} onPress={this.opciones} />
        </View>
        <View style={styles.container}>
          <Teclas valor={0} onPress={this.opciones} />
          <Teclas valor="+" onPress={this.opciones} />
          <Teclas valor="-" onPress={this.opciones} />
        </View>
        <View style={styles.container}>
          <Teclas valor="=" onPress={this.opciones} />
          <Teclas valor="*" onPress={this.opciones} />
          <Teclas valor="/" onPress={this.opciones} />
        </View>
        <View>
          <Teclas valor="C" onPress={this.opciones} />

        </View>
        <StatusBar style="auto" />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  princi: {
    justifyContent: 'center',
    margin: 'auto',
  },
  
  resultadoContainer: {
    height:100,
    width:300,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#eee',
  },
  resultado: {
    fontSize: 40,
  },
});
