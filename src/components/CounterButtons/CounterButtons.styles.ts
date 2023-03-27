import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  buttonIncrement: {
    backgroundColor: '#333',
    borderRadius: 30,
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonDecrement: {
    backgroundColor: '#333',
    borderRadius: 30,
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonBig: {
    width: 400,
  },
  buttonSmall: {
    width: 200,
  },
  buttonsContainer: {
    flexDirection: 'column',
  },
  containerVertical: {
    flexDirection: 'column',
  },
  containerHorizontal: {
    flexDirection: 'row',
  },
  containerHorizontalReverse: {
    flexDirection: 'row-reverse',
  },
  buttonIncrementHorizontal: {
    backgroundColor: '#333',
    borderRadius: 30,
    width: 150,
    height: 300,
  },
  buttonDecrementHorizontal: {
    backgroundColor: '#333',
    borderRadius: 30,
    width: 60,
    height: 300,
  },
});
