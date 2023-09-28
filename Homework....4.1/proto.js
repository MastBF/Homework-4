let arr = [1,2,3,4]


function callback(item) {
  return  item * 2
}

function map2(arr) {
    let array = []
    for (let i = 0;  i < this.length;i++) {
        let item = callback(this[i])
        array.push(item)
    }
    
    return array
}


Object.prototype.map2 = map2

console.log(arr.map2())

function callback2(item) {
     if(item % 2 === 0) return item
     
}

function filter2(arr) {
    let array = []
    for (let i = 0;  i < this.length;i++) {
        let item = callback2(this[i])
        if (item) {
        array.push(item)
        }
    }
    
    return array
}



Array.prototype.filter2 = filter2

// console.log(arr.filter2())

function callback3 (item, accumulator) {
   return item + accumulator
}

function reduce2(callback3, currentValue = 0) {
     
    let accumulator = currentValue
    for (let i = 0;i < this.length;i++) {
        accumulator = callback3(this[i], accumulator)
        
    }
    return accumulator
}

Array.prototype.reduce2 = reduce2

// console.log(arr.reduce2(callback3))






