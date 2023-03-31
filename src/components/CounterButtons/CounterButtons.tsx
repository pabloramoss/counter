import { View, TouchableOpacity, Text } from "react-native";
import { ButtonPosition } from "../../../App";
import { styles } from "./CounterButtons.styles";


interface Props {
  position: ButtonPosition;
  increment: () => void;
  decrement: () => void;
}

const CounterButtons: React.FC<Props> = ({ position, increment, decrement }) => {
  
  const containerStyles = (() => {
    switch (position) {
      case 'horizontal':
        return styles.containerHorizontal;
      case 'horizontal-reverse':
        return styles.containerHorizontalReverse;
      case 'vertical':
        return styles.containerVertical;
      default:
        return styles.containerVertical;
    }
  })();

  return (
    <View style={containerStyles}>
      <TouchableOpacity style={styles.buttonIncrement} activeOpacity={0.6} onPress={increment}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonDecrement} activeOpacity={0.6} onPress={decrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterButtons;