function pow(num1, num2) {
  if (num2 != 1) return num1 * pow(num1, num2 - 1)
  return num1
}

console.log(pow(9, 3))