import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import ButtonCalculator from '../components/ButtonCalculator'

const gray = '#9b9b9b'
const orange = '#ff9427'
const negative = '-'
const dot = '.'
const zero = '0'

const CalculatorScreen = () => {
  const [number, setNumber] = useState(zero)
  const [prevNumber, setPrevNumber] = useState(zero)

  const clean = () => setNumber(zero)

  const buildNumber = (textNumber: string) => {
    if (number.includes(dot) && textNumber === dot) return
    if (number.startsWith(zero) || number.startsWith(`${negative}${zero}`)) {
      if (textNumber === dot) setNumber(number + textNumber)
      else if (textNumber === zero && number.includes(dot))
        setNumber(number + textNumber)
      else if (textNumber !== zero && !number.includes(dot))
        setNumber(textNumber)
      else if (textNumber === zero && !number.includes(dot)) setNumber(number)
      else setNumber(number + textNumber)
    } else {
      setNumber(number + textNumber)
    }
  }

  const positiveNegative = () => {
    if (number.includes(negative)) {
      setNumber(number.replace(negative, ''))
    } else {
      setNumber(negative + number)
    }
  }

  const deleteBtn = () => {
    let currentNegative = ''
    let temporalNumber = number
    if (number.includes(negative)) {
      currentNegative = negative
      temporalNumber = number.substr(1)
    }

    if (temporalNumber.length > 1)
      setNumber(currentNegative + temporalNumber.slice(0, -1))
    else {
      setNumber(zero)
    }
  }

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{prevNumber}</Text>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.result}>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalculator color={gray} onPress={clean} text="C" />
        <ButtonCalculator color={gray} onPress={positiveNegative} text="+/-" />
        <ButtonCalculator color={gray} onPress={deleteBtn} text="del" />
        <ButtonCalculator color={orange} onPress={clean} text="/" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text="7" />
        <ButtonCalculator onPress={buildNumber} text="8" />
        <ButtonCalculator onPress={buildNumber} text="9" />
        <ButtonCalculator color={orange} onPress={clean} text="x" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text="4" />
        <ButtonCalculator onPress={buildNumber} text="5" />
        <ButtonCalculator onPress={buildNumber} text="6" />
        <ButtonCalculator color={orange} onPress={clean} text={negative} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text="1" />
        <ButtonCalculator onPress={buildNumber} text="2" />
        <ButtonCalculator onPress={buildNumber} text="3" />
        <ButtonCalculator color={orange} onPress={clean} text="+" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text={zero} width />
        <ButtonCalculator onPress={buildNumber} text={dot} />
        <ButtonCalculator color={orange} onPress={clean} text="=" />
      </View>
    </View>
  )
}

export default CalculatorScreen
