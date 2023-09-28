function createCachingFunction() {
    let arr = [1]
   return (num) => {
    let number = num * 2
    for(let key of arr) {
        if(key === number) return `${number}: Caches`
    }
    arr.push(number)
    return `${number}: Calculate`
   }
}

const cachedCalculation = createCachingFunction(); 
console.log(cachedCalculation(10));
console.log(cachedCalculation(10));
