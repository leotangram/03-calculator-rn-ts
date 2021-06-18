import { useRef, useState } from 'react'

enum OperatorsEnum {
  add,
  substract,
  multiply,
  divide
}

const negative = '-'
const dot = '.'
const zero = '0'

export const useCalculator = () => {
  const lastOperation = useRef<OperatorsEnum>()

  const [number, setNumber] = useState(zero)
  const [prevNumber, setPrevNumber] = useState(zero)

  const clean = () => {
    setNumber(zero)
    setPrevNumber(zero)
  }

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

  const changeNumberToPrevNumber = () => {
    if (number.endsWith(dot)) {
      setPrevNumber(number.slice(0, -1))
    } else {
      setPrevNumber(number)
    }
    setNumber(zero)
  }

  const addBtn = () => {
    changeNumberToPrevNumber()
    lastOperation.current = OperatorsEnum.add
  }

  const substractBtn = () => {
    changeNumberToPrevNumber()
    lastOperation.current = OperatorsEnum.substract
  }

  const multiplyBtn = () => {
    changeNumberToPrevNumber()
    lastOperation.current = OperatorsEnum.multiply
  }

  const divideBtn = () => {
    changeNumberToPrevNumber()
    lastOperation.current = OperatorsEnum.divide
  }

  const calculate = () => {
    const number1 = Number(number)
    const number2 = Number(prevNumber)

    switch (lastOperation.current) {
      case OperatorsEnum.add:
        setNumber(`${number1 + number2}`)
        break
      case OperatorsEnum.substract:
        setNumber(`${number2 - number1}`)
        break
      case OperatorsEnum.multiply:
        setNumber(`${number1 * number2}`)
        break
      case OperatorsEnum.divide:
        setNumber(`${number2 / number1}`)
        break
    }

    setPrevNumber(zero)
  }

  return {
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
  }
}
