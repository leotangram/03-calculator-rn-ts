import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { useCalculator } from '../hooks/useCalculator'
import ButtonCalculator from '../components/ButtonCalculator'

const gray = '#9b9b9b'
const orange = '#ff9427'

const CalculatorScreen = () => {
  const {
    addBtn,
    buildNumber,
    calculate,
    clean,
    deleteBtn,
    divideBtn,
    multiplyBtn,
    negative,
    number,
    positiveNegative,
    prevNumber,
    substractBtn
  } = useCalculator()

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.smallResult}>{prevNumber}</Text>
      )}
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.result}>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalculator color={gray} onPress={clean} text="C" />
        <ButtonCalculator color={gray} onPress={positiveNegative} text="+/-" />
        <ButtonCalculator color={gray} onPress={deleteBtn} text="del" />
        <ButtonCalculator color={orange} onPress={divideBtn} text="/" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text="7" />
        <ButtonCalculator onPress={buildNumber} text="8" />
        <ButtonCalculator onPress={buildNumber} text="9" />
        <ButtonCalculator color={orange} onPress={multiplyBtn} text="x" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text="4" />
        <ButtonCalculator onPress={buildNumber} text="5" />
        <ButtonCalculator onPress={buildNumber} text="6" />
        <ButtonCalculator
          color={orange}
          onPress={substractBtn}
          text={negative}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text="1" />
        <ButtonCalculator onPress={buildNumber} text="2" />
        <ButtonCalculator onPress={buildNumber} text="3" />
        <ButtonCalculator color={orange} onPress={addBtn} text="+" />
      </View>
      <View style={styles.row}>
        <ButtonCalculator onPress={buildNumber} text={'0'} width />
        <ButtonCalculator onPress={buildNumber} text={'.'} />
        <ButtonCalculator color={orange} onPress={calculate} text="=" />
      </View>
    </View>
  )
}

export default CalculatorScreen
