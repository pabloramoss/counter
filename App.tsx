import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';
import { CounterButtons } from './src/components/CounterButtons';
import { Navbar } from './src/components/Navbar';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    Vibration.vibrate(80);
    setCount(count + 1);
  };

  const decrementCount = () => {
    Vibration.vibrate(80);
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <TouchableOpacity style={styles.count} onPress={incrementCount} activeOpacity={1}>
          <Text style={styles.countText}>{count}</Text>
        </TouchableOpacity>
        <CounterButtons 
          increment={incrementCount} 
          decrement={decrementCount}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  count: {
    backgroundColor: 'white',
    width: 300,
    height: 475,
    justifyContent: 'center'
  },
  countText: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
