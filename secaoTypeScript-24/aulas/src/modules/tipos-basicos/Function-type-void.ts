/*
    Function Type: void
    - Funções que não retornam valores são do tipo void.
*/


//CartItem
type CartItem ={
    id: number,
    price: number
}
//ShooppingCart
type ShoppingCart = {
    cartItems: CartItem[]
}
//Variavel do tipo ShooppingCart contendoo um array de CartItem
const ShooppingCart: ShoppingCart = {
    cartItems: [
        {id: 1, price: 10},
        {id: 2, price: 20},
        {id: 3, price: 30},
    ]
}
//Funcao void que soma os valores dos itens
export function calculateTotal(ShooppingCart: ShoppingCart): void{
    const total = ShooppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
    console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
}

calculateTotal(ShooppingCart);