function countOccurrences(arr, num, item = 0,time = 0) {
    if (time > arr.length) return item
    if (arr[time] === num ) return countOccurrences(arr, num, ++item, ++time)
    return countOccurrences(arr, num, item, ++time)
}


const numbers = [2, 3, 4, 2, 5, 2, 6, 2]; 
console.log(countOccurrences(numbers, 2))