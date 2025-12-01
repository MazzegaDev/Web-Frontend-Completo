"use strict";
/*
    Function Type: void
    - Funções que não retornam valores são do tipo void.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = calculateTotal;
exports.getAdress = getAdress;
//Variavel do tipo ShooppingCart contendoo um array de CartItem
var ShooppingCart = {
    cartItems: [
        { id: 1, price: 10 },
        { id: 2, price: 20 },
        { id: 3, price: 30 },
    ],
};
var addresses = [
    { cep: "19500", default: false },
    { cep: "19501", default: true },
];
var customer = {
    addresses: addresses,
};
console.log("Details", customer);
//Funcao void que soma os valores dos itens
function calculateTotal(ShooppingCart) {
    var total = ShooppingCart.cartItems.reduce(function (acc, item) { return acc + item.price; }, 0);
    return total;
}
var total = calculateTotal(ShooppingCart);
console.log("Total: ".concat(total.toFixed(2)));
function getAdress(customer) {
    return customer.addresses.find(function (a) { return a.default; });
}
var principalAdd = getAdress(customer);
console.log(principalAdd);
