function flattenArray(arr) {
let array = []
    function rec(arr, index) {
        if(index >= arr.length) return;

        if(Array.isArray(arr[index])){ 
         rec(arr[index], 0)
        }else { 
         array.push(arr[index]) 
        }
        rec(arr, ++index)
    }
    rec(arr, 0)
    return array
}


const nestedArray = [1, [2, [55, 4], 5], 6]; 
console.log(flattenArray(nestedArray));

// console.log(nestedArray[1])
