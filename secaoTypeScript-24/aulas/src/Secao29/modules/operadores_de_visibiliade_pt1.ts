// class Product {
//   public name: string;
//   protected price: number;
//   private stock: number;

//   //Acesso na classe
//   constructor(n: string, p: number, s: number) {
//     this.name = n;
//     this.price = p;
//     this.stock = s;
//   }
// }

// class Eletronic extends Product{
//   //Acesso na subclasse
//   showDetails(): string{
//     return `Detalhes: ${this.name} - ${this.price}`;
//   }
// }

// //Acesso fora da classe, por meio de instancia.
// const p = new Product('RX7600', 1800, 1500);
// console.log(p.name);