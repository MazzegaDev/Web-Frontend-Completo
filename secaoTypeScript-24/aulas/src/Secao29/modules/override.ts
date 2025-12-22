class PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processamento generico de R$ ${amount.toFixed(2)}`);
  }
}

class CreditCardPayment extends PaymentMethod {
  override processPayment(amount: number): void {
    console.log(
      `Processamento com cartão de credito de R$ ${amount.toFixed(2)}`,
    );
  }
}

class PayPalPayment extends PaymentMethod {
  override processPayment(amount: number): void {
    console.log(
      `Processamento com cartão do PayPal de R$ ${amount.toFixed(2)}`,
    );
  }
}

const payment1 = new PaymentMethod();
payment1.processPayment(100);

const payment2 = new CreditCardPayment();
payment2.processPayment(200);

const payment3 = new PayPalPayment();
payment3.processPayment(300);