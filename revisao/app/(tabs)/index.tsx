import { View, StyleSheet } from 'react-native';

import Olimpiada from './Olimpiada';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Olimpiada pais1="Austrália" meda1="🥇4🥈3🥉0 = 7" pais2="China" meda2="🥇5🥈2🥉2 = 9"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
