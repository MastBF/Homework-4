function createCounter() {
    let counter = 0
    return () => {
      return  ++counter
    }
}

const counter = createCounter(); 
console.log(counter()); // Output: 1
console.log(counter())