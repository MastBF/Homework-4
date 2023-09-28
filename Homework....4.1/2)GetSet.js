function privateVariable(num) {
    let value = num
    return {
        get() {
            return value
        },
        set(v) {
            value = v
        }
    }
}

const secretValue = privateVariable(42); 
console.log(secretValue.get()); // Output: 42 
secretValue.set(100); 
console.log(secretValue.get());