function createPerson(name, age) {
    let username = name
    let userAge  = age 
    return {
        getName() {
            return username
        },
        getAge() {
            return userAge
        },
        setName(n){
            username = n
        },
        setAge(a) {
            userAge = a
        }
    }
}


const person = createPerson("Alice", 30); 
console.log(person.getName()); // Output: "Alice"
console.log(person.getAge()); // Output: 30 
person.setName("Bob"); 
person.setAge(25); 
console.log(person.getName()); // Output: "Bob"
console.log(person.getAge()); // Output: 25