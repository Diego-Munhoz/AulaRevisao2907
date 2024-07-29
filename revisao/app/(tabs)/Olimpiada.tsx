import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Olimpiada = ({meda1, pais1, meda2, pais2}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Quadro de Medalhas</Text>
            <Text style={styles.text}>{pais1}                {meda1}</Text>
            <Text style={styles.text}>{pais2}                {meda2}</Text>
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
  h1:{
    fontSize: 30,
    paddingBottom: 40,
    fontWeight: 'bold',
  }
});

export default Olimpiada;