import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>
      <View>
        <View style={styles.button}>
          <Text style={styles.textButton}>1</Text>
        </View>
      </View>
    </View>
  )
}

export default CalculatorScreen
