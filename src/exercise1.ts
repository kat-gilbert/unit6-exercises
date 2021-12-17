
class BankAccount {
    balance: number;
    interestRate: number = 2.9;

        constructor(balance: number, interestRate: number) {
            this.balance = balance;
            this.interestRate = interestRate;
        }

addInterest():void {
    this.interestRate++;
}
}

class BankAccountWithFee extends BankAccount {
    fee: number = 5;

    applyFee():void {
        this.fee++;

    }
}


let myAccount: BankAccount = (10999, 2.9);


let newAccount: BankAccountWithFee = new BankAccountWithFee {

    newAccount.applyFee();
}

console.log(newAccount.interestRate);
console.log(myAccount.balance);
