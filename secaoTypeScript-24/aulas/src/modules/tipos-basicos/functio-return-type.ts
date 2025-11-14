/*
    Function Type: void
    - Funções que não retornam valores são do tipo void.
*/

//CartItem
type CartItem = {
  id: number;
  price: number;
};

//ShooppingCart
type ShoppingCart = {
  cartItems: CartItem[];
};
//Variavel do tipo ShooppingCart contendoo um array de CartItem
const ShooppingCart: ShoppingCart = {
  cartItems: [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
    { id: 3, price: 30 },
  ],
};

type Adress = {
  cep: string;
  default: boolean;
};

const addresses: Adress[] = [
  { cep: "19500", default: false },
  { cep: "19501", default: true },
];

type Customer = {
  addresses: Adress[];
};

const customer: Customer = {
  addresses: addresses,
};

console.log("Details", customer)

//Funcao void que soma os valores dos itens
export function calculateTotal(ShooppingCart: ShoppingCart): number {
  const total = ShooppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  return total;
}

const total = calculateTotal(ShooppingCart);
console.log(`Total: ${total.toFixed(2)}`);

export function getAdress(customer: Customer): Adress | undefined{
    return customer.addresses.find((a) => a.default);
}

const principalAdd = getAdress(customer);

console.log(principalAdd);