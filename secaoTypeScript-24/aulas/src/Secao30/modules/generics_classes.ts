class Stack<T> {
  constructor(private stack: T[]) {}

  last(): T | undefined {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
  }
}

type Products = { id: number; name: string };

const products: Products[] = [
  { id: 1, name: "Cellphone" },
  { id: 2, name: "GPU" },
];

const stack1 = new Stack(products);
const stackLast = stack1.last();
console.log(stackLast);


const stack2 = new Stack(["Jose", "Ana", "Gui"]);
const stackLast2 = stack2.last();
console.log(stackLast);

// const numbers = [1, 2, 5, 4, 10, 20];

// const lastNumber = Stack.last(numbers);
// console.log(numbers);

// type Products = { id: number; name: string };

// const products: Products[] = [
//   { id: 1, name: "Cellphone" },
//   { id: 2, name: "GPU" },
// ];

// const lastProduct = Stack.last(products);
// console.log(lastProduct);
