class BankAccount {
    #balance = 1000;
    ownerName = 'pial';
    accountNumber = 1001; 
    diposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }
    getBalance() {
        return this.#balance;
    }
    displayAccountInfo() {
        console.log(this.accountNumber);
        console.log(this.ownerName);
        console.log(this.#balance)
    }
}


const acc = new BankAccount();
acc.accountNumber = 1002;
acc.ownerName = 'Mahmud';
acc.diposit(300);
acc.withdraw(200);

console.log(acc.getBalance());
console.log(acc.displayAccountInfo());