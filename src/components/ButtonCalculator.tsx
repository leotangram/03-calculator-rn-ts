import React, { FC } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

interface ButtonCalculatorProps {
  color?: string
  text: string
}

const ButtonCalculator: FC<ButtonCalculatorProps> = ({ color, text }) => {
  return (
    <View style={{ ...styles.button, backgroundColor: color }}>
      <Text style={styles.textButton}>{text}</Text>
    </View>
  )
}

export default ButtonCalculator
