import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import ButtonCalculator from '../components/ButtonCalculator';

const gray = "#9b9b9b"
const orange = "#ff9427"

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>
      <View style={styles.row}>
        <ButtonCalculator color={gray} text="C" />
        <ButtonCalculator color={gray} text="+/-" />
        <ButtonCalculator color={gray} text="del" />
        <ButtonCalculator color={orange} text="/" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="7" />
        <ButtonCalculator text="8" />
        <ButtonCalculator text="9" />
        <ButtonCalculator color={orange} text="X" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="4" />
        <ButtonCalculator text="5" />
        <ButtonCalculator text="6" />
        <ButtonCalculator color={orange} text="-" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="1" />
        <ButtonCalculator text="2" />
        <ButtonCalculator text="3" />
        <ButtonCalculator color={orange} text="+" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="0" width />
        <ButtonCalculator text="." />
        <ButtonCalculator color={orange} text="=" />
      </View>
    </View>
  )
}

export default CalculatorScreen
