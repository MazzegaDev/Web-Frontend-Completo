type Person = {
   name: string,
   idade: number,
}

type Employee = {
   departament: string;
}

type Customer = {
   wishlist: string[]
}


type EmployeeDetails = Person & Employee

const employee: EmployeeDetails = {
   name: 'Guilherme',
   idade: 20,
   departament: "IT",
}

type CustumerDetails = Person & Customer & Employee

const cutomer: CustumerDetails = {
   name: "Gui",
   wishlist: ['RX 7600', 'Ryzen 7 5600x'],
   idade: 20,
   departament: "IT"
}