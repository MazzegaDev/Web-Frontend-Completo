class BankAccount {
  protected holder: string;
  protected balance: number;

  constructor(holder: string, balance: number) {
    this.holder = holder;
    this.balance = balance;
  }

  public getHolder(): string {
    return this.holder;
  }
}

class CheckinAccount {
  private overdraftLimit: number;

  constructor(overdraftLimit: number) {
    this.overdraftLimit = overdraftLimit;
  }

  public getOverdraftLimit(): number {
    return this.overdraftLimit;
  }
}

const A = new BankAccount("Gui", 200000);
const B = new CheckinAccount(25000);

console.log(A);
console.log(A instanceof BankAccount);

function showDetails(acc: BankAccount | CheckinAccount): void {
  if (acc instanceof BankAccount) {
    console.log(acc.getHolder());
  } else if (acc instanceof CheckinAccount) {
    console.log(acc.getOverdraftLimit());
  }else{
   console.error("Conta não identificada")
  }
}

showDetails(B);
