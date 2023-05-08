let number1 = document.getElementById('num1')
let number2 = document.getElementById('num2')
let screen = document.getElementById('output')
let operator = document.getElementById('operator')
let btn = document.getElementById('btn')

let calculator = () => {
  if (operator.value === '+') {
    let result = Number(number1.value) + Number(number2.value)
    screen.value = result

    setTimeout(() => {
      screen.value = ''
    }, 3000)
    number1.value = ''
    number2.value = ''
    operator.value = ''
  } else if (operator.value === '-') {
    let result = Number(number1.value) - Number(number2.value)
    screen.value = result

    setTimeout(() => {
      screen.value = ''
    }, 3000)
    number1.value = ''
    number2.value = ''
    operator.value = ''
  } else if (operator.value === '/') {
    let result = Number(number1.value) / Number(number2.value)
    screen.value = result
    setTimeout(() => {
      screen.value = ''
    }, 3000)
    number1.value = ''
    number2.value = ''
    operator.value = ''
  } else if (operator.value === '*') {
    let result = Number(number1.value) * Number(number2.value)
    screen.value = result
    setTimeout(() => {
      screen.value = ''
    }, 3000)
    number1.value = ''
    number2.value = ''
    operator.value = ''
  }
}
calculator()
btn.addEventListener('click', calculator)
