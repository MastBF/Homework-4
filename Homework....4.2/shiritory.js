class Shiritory {
       constructor(){    
        this.arr = []
        this.gameOver = false 
    } 
    play(word) {

        if(this.arr.length === 0 ){
             this.arr.push(word) 
             return this.arr
        }
         if(this.arr[this.arr.length - 1].at(-1) === word [0]){
             this.arr.push(word)
             return this.arr
        }
             this.gameOver = true
        if( this.arr.includes(word)) {
            return
        }
        this.gameOver = true
    
    
    }
    restar() {
        this.gameOver = false
        this.arr = []
    }
    
}

let myShiritori = new Shiritory()

console.log(myShiritori.play("apple"))
console.log(myShiritori.play("egg"))
console.log(myShiritori.play("garage"))



