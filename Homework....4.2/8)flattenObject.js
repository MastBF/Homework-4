function flattenObject() {
  
}



const nestedObject = { 
    a: 1, 
    b: { 
      c: 2, 
      d: { 
        e: 3, 
        f: 4, 
      }, 
    }, 
    g: 5, 
  }; 
   
  const flattenedObject = flattenObject(nestedObject); 
  console.log(flattenedObject);