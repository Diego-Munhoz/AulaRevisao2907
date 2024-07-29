import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Pegar = ({nome, idade}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {nome}!</Text>
            <Text style={styles.text}>Sua idade é: {idade}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  container:{
    padding: 10,
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
    color: '#333',
  },
});

export default Pegar;