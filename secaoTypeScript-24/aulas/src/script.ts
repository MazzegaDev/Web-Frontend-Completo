export function sum(a: number, b: number) {
  console.log("Dentro do oscopo de modulo");
  //Basta usar o export para transformar em um modulo
  return { result: a + b };
}
