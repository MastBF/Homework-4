function sumOfDigits(num,sum = 0,item = 0){
    if(item >= num.toString().split('').length) return sum
    sum += +num.toString().split('')[item]
   return sumOfDigits(num, sum, ++item)
}

console.log(sumOfDigits(12345))


