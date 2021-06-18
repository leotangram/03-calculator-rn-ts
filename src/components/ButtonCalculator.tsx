import React, { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface ButtonCalculatorProps {
  color?: string
  text: string
  width?: boolean
  onPress: (textNumber: string) => void
}

const ButtonCalculator: FC<ButtonCalculatorProps> = ({
  color = '#2d2d2d',
  onPress,
  text,
  width = false
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: width ? 180 : 80
        }}
      >
        <Text
          style={{
            ...styles.textButton,
            color: color === '#9b9b9b' ? '#000000' : '#ffffff'
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonCalculator
