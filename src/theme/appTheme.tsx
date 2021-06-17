import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    textAlign: 'right'
  },
  smallResult: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right'
  },
  button: {
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
    width: 80
  },
  textButton: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '300',
    padding: 10,
    textAlign: 'center'
  }
});