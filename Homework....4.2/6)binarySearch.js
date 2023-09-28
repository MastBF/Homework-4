function binarySearch(arr, val, time = 0) {
 if(time > arr.length ) return -1
 if(arr[0] === val) return time
 return binarySearch(arr.slice(1),val,++time)
 
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]; 
console.log(binarySearch(sortedArray, 9)); // Output: 4
console.log(binarySearch(sortedArray, 10));

// console.log(sortedArray.slice(1))