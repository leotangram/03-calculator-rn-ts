import React, { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface ButtonCalculatorProps {
  color?: string
  text: string
  width?: boolean
}

const ButtonCalculator: FC<ButtonCalculatorProps> = ({
  color = '#2d2d2d',
  text,
  width = false
}) => {
  return (
    <TouchableOpacity>
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
