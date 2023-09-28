let Pagination = {
    array:[],
    index:0,
    prevPage() {
        --this.index
    },
    nextPage() {
        ++this.index
    },
    firstPage() {
        this.index = 0
    },
    lastPage() {
        this.index = this.array.length - 1
    },
    goToPage(num) {
        this.index = num - 1
    },
    getPageItems() {
        return this.array[this.index]
    },
    init(arr2, num, arr3 = []) {
       for(let i = 0; i < 4;i++) {
        for(let i = 0; i < num; i++) {
            arr3.push(arr2[i])
            
        }
       arr2 = arr2.slice(4)
    }
        this.array.push(arr3)
      
    }
}


const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]
Pagination.nextPage() // add the current page by one
// console.log(Pagination.getPageItems()) // ["e", "f", "g", "h"]
