class Account {
    #balance
    constructor(name, balance) {
        this.name = name
        this.#balance = balance
        this.id = this.random()
    }
    random(){
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    }
    get balance() {
        return this.#balance
    }
    set balance(num) {
        this.#balance = num
    }
    credit(num) {
        this.#balance += num
    }
    debit(num) {
        this.#balance -= num
    }
    transferTo(acc, num) {
       acc.credit(num)
       this.debit(num)
    }
    static identifyAccounts() {

    }
}


const saving = new Account("saving", 1000); 
const current = new Account("current", 8000); 
 
saving.credit(5000); 
saving.debit(1000); 
saving.debit(2000); 
saving.transferTo(current, 1000); 
console.log(saving.balance)
console.log(current.balance)
console.log(saving)
const res = Account.identifyAccounts(current, saving)
current.transferTo(saving, 2000); 
console.log(saving.balance)
