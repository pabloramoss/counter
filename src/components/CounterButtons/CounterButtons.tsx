import { View, TouchableOpacity, Text } from "react-native"
import { styles } from "./CounterButtons.styles"

interface Props {
  increment: () => void;
  decrement: () => void;
}

const CounterButtons: React.FC<Props> = ({ increment, decrement }) => {

  return (
    <View style={styles.buttonsContainer}>
    <TouchableOpacity style={styles.button} onPress={increment}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={decrement}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
  )
}

export default CounterButtons