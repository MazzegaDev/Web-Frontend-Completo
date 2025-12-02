class bankAccount {
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

class checkinAccount extends bankAccount {
  private overdraftLimit: number;

  constructor(overdraftLimit: number, holder:string, balance: number) {
    super(holder, balance);
    this.overdraftLimit = overdraftLimit;
  }

  public getOverdraftLimit(): number {
    return this.overdraftLimit;
  }
}


class SavingsAccount extends bankAccount{
   private interestRate: number;

   constructor(holder: string, balance: number, int: number){
      super(holder, balance);
      this.interestRate = int;
   }

   public getInterestRate(): number{
      return this.interestRate;
   }
}

const accList: bankAccount[] = [
  new checkinAccount(20000, "Gui", 45000),
  new SavingsAccount("Joao", 4000, 0.005),
  new checkinAccount(20000, "Eduardo", 45000),
  new SavingsAccount("Paulo", 4000, 0.005),
];

function processAccounts(acc: bankAccount[]): void{
   acc.forEach(acc => {
         if(acc instanceof checkinAccount){
            console.log("Processando a conta corrente: ", acc.getHolder())
         } else if(acc instanceof SavingsAccount){
            console.log('Processando a conta poupança: ', acc.getInterestRate(),acc.getHolder());
         }
      console.log("-----------------")
   })
}


processAccounts(accList);