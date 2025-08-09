/*
 Type Alias
 O type alias nos permite criar apelidos para os tipos e assim melhorando a legibilidade do codigo fonte.

 -Utilizacao do type alias-
    type Programmer = {
    name: string;
    age?: number;
    skills?: string[];
    contact: {email: string; phone: string}

    export function showProgrammer(dev: Programmer) {
     console.log(dev);
    }
 -Sintaxe-
 Definimos um alias com a palavra type e depois o nome do alias. Note que deve ser usado a notacao Pascal, primeira letra maiuscula
 
 Oque estamos dizendo?:
 Estamos dizendo que o parametro e do tipo Progammer e Progammer por sua vez possua sua forma com seus tipos.

 Alem de tipar objetos tambem podemos tipar valores primitivos.
 type Salary = string | number;
}
*/
type Salary = string | number;

type Programmer = {
  name: string;
  age?: number;
  skills?: string[];
  contact: { email: string; phone: string };
  salary: Salary;
};

export function showProgrammer(dev: Programmer) {
  console.log(dev);
}

showProgrammer({
  name: "Roberto",
  age: 40,
  skills: ["PHP"],
  contact: { email: "gmaz@gmail.com", phone: "9223421" },
  salary: 12000,
});
