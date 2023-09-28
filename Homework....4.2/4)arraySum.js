function arraySum(arr) {
if (arr.length === 1) return arr[0]
return arr[0] + arraySum(arr.slice(1))
}
let arr = [1, 2, 3, 4, 5]

console.log(arraySum(arr))