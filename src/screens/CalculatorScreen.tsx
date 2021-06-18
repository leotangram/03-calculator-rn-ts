import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import ButtonCalculator from '../components/ButtonCalculator'

const gray = '#9b9b9b'
const orange = '#ff9427'

const CalculatorScreen = () => {
  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')

  const clean = () => setNumber('0')

  const buildNumber = (textNumber: string) => setNumber(number + textNumber)

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{prevNumber}</Text>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.result}>{number}</Text>
      <View style={styles.row}>
        <ButtonCalculator color={gray} onPress={clean} text="C" />
        <ButtonCalculator color={gray} onPress={clean} text="+/-" />
        <ButtonCalculator color={gray} onPress={clean} text="del" />
        <ButtonCalculator color={orange} onPress={clean} text="/" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text="7" />
        <ButtonCalculator onPress={buildNumber} text="8" />
        <ButtonCalculator onPress={buildNumber} text="9" />
        <ButtonCalculator color={orange} onPress={clean} text="X" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text="4" />
        <ButtonCalculator onPress={buildNumber} text="5" />
        <ButtonCalculator onPress={buildNumber} text="6" />
        <ButtonCalculator color={orange} onPress={clean} text="-" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text="1" />
        <ButtonCalculator onPress={buildNumber} text="2" />
        <ButtonCalculator onPress={buildNumber} text="3" />
        <ButtonCalculator color={orange} onPress={clean} text="+" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text="0" width />
        <ButtonCalculator onPress={buildNumber} text="." />
        <ButtonCalculator color={orange} onPress={clean} text="=" />
      </View>
    </View>
  )
}

export default CalculatorScreen
