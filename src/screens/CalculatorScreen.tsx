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
    </View>
  )
}

export default CalculatorScreen
