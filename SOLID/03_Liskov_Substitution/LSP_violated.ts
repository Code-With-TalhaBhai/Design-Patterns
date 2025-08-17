interface Account {
    deposit(amount: number): void;
    withdraw(amount: number): void;
}

export class SavingAccount implements Account {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount} in Savings Account. New Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount} from Savings Account. New Balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds in Savings Account!");
        }
    }
}

export class CurrentAccount implements Account {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount} in Current Account. New Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount} from Current Account. New Balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds in Current Account!");
        }
    }
}

export class FixedTermAccount implements Account {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount} in Fixed Term Account. New Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        throw new Error("Withdrawal not allowed in Fixed Term Account!");
    }
}



export class BankClient {
    private accounts: Account[];

    constructor(accounts: Account[]) {
        this.accounts = accounts;
    }

    processTransactions(): void {
        for (const acc of this.accounts) {
            acc.deposit(1000); // All accounts allow deposits

            // Assuming all accounts support withdrawal (LSP Violation)
            try {
                acc.withdraw(500);
            } catch (e: any) {
                console.log(`Exception: ${e.message}`);
            }
        }
    }
}

// Main equivalent
const accounts: Account[] = [
    new SavingAccount(),
    new CurrentAccount(),
    new FixedTermAccount()
];

const client = new BankClient(accounts);
client.processTransactions(); // Throws error for FixedTermAccount
