
class BankAccount {
    balance: number;
    interestRate: number = 2.9;

        constructor(balance: number, interestRate: number) {
            this.balance = balance;
            this.interestRate = interestRate;
        }

addInterest():void {
    this.balance = this.balance * 1 + this.interestRate;
}
}

class BankAccountWithFee extends BankAccount {
    fee: number = 5;

    applyFee(): void {
        this.balance -= this.fee;

    }
}

let myAccount: BankAccountWithFee = new BankAccountWithFee(500, 2.9);

let newAccount: BankAccountWithFee = new BankAccountWithFee(1100, 5);


console.log(newAccount.balance);
newAccount.applyFee();
console.log(newAccount.balance);

newAccount.addInterest();
console.log(newAccount.balance);


console.log(myAccount.balance);
myAccount.addInterest();
myAccount.applyFee();
console.log(myAccount.balance);

