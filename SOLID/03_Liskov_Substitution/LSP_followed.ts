// Base interface for deposit functionality
interface DepositOnlyAccount {
    deposit(amount: number): void;
}

// Interface extending deposit to include withdrawal
interface WithdrawableAccount extends DepositOnlyAccount {
    withdraw(amount: number): void;
}

export class SavingAccount implements WithdrawableAccount {
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

export class CurrentAccount implements WithdrawableAccount {
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

export class FixedTermAccount implements DepositOnlyAccount {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount} in Fixed Term Account. New Balance: ${this.balance}`);
    }
}

export class BankClient {
    private withdrawableAccounts: WithdrawableAccount[];
    private depositOnlyAccounts: DepositOnlyAccount[];

    constructor(
        withdrawableAccounts: WithdrawableAccount[],
        depositOnlyAccounts: DepositOnlyAccount[]
    ) {
        this.withdrawableAccounts = withdrawableAccounts;
        this.depositOnlyAccounts = depositOnlyAccounts;
    }

    processTransactions(): void {
        for (const acc of this.withdrawableAccounts) {
            acc.deposit(1000);
            acc.withdraw(500);
        }
        for (const acc of this.depositOnlyAccounts) {
            acc.deposit(5000);
        }
    }
}

// Main equivalent
const withdrawableAccounts: WithdrawableAccount[] = [
    new SavingAccount(),
    new CurrentAccount()
];

const depositOnlyAccounts: DepositOnlyAccount[] = [
    new FixedTermAccount()
];

const client = new BankClient(withdrawableAccounts, depositOnlyAccounts);
client.processTransactions();
