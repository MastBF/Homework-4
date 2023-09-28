
let calculator = {
    add(...arg) {
        let sum = 0
        let arr = [...arg]
        for (let key of arr) {
            sum += key
        }
          return sum
    },
    multiply(...arg) {
        let multi = 1
        let arr = [...arg]
        for (let key of arr) {
            multi *= key
        }
          return multi
    },
    difference(a, ...arg) {
        let diff = a
        let arr = [...arg]
        for (let key of arr) {
            diff -= key
        }
          return diff
    },
    division(a, ...arg) {
        let div = a
        let arr = [...arg]
        for (let key of arr) {
            div -= key
        }
          return div
    }
}
function createCalculator(str) {
    return (...arr)=> {
      return  str = calculator[str](...arr)
    }
 }

const add = createCalculator("add"); 
console.log(add(3, 5, 9))
 
const difference = createCalculator("difference"); 
console.log(difference(2, 4, 9))