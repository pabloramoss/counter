import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';
import { CounterButtons } from './src/components/CounterButtons';
import { Navbar } from './src/components/Navbar';

export type ButtonPosition = 'vertical' | 'horizontal' | 'horizontal-reverse' | 'vertical-equals' | 'horizontal-equals' | 'horizontal-reverse-equals';

const positions = ['vertical', 'horizontal', 'horizontal-reverse', 'vertical-equals', 'horizontal-equals', 'horizontal-reverse-equals'];


export default function App() {
  const [count, setCount] = useState(0);
  const [buttonPosition, setButtonPosition] = useState<ButtonPosition>('vertical');
  
  function toggleButtonPosition(currentPosition: ButtonPosition) {
    const currentIndex = positions.indexOf(currentPosition);
    const nextIndex = (currentIndex + 1) % positions.length;
    const nextPosition = positions[nextIndex] as ButtonPosition;
    setButtonPosition(nextPosition);
  }

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
      <Navbar toggleButtonPosition={() => toggleButtonPosition(buttonPosition)} />
      <View style={styles.content}>
        <TouchableOpacity style={styles.count} onPress={incrementCount} activeOpacity={1}>
          <Text style={styles.countText}>{count}</Text>
        </TouchableOpacity>
        <CounterButtons 
          position={buttonPosition}
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
    marginTop: 30,
    width: 300,
    height: 370,
    justifyContent: 'center'
  },
  countText: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
