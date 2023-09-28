function add(a, b, c) { 
    return a + b + c; 
  } 

function partial(add,a) {
  return (b,c) => {
  let sum = add(a,b,c)
  return sum
  }
}  



const add5 = partial(add, 5); 
console.log(add5(10, 20))