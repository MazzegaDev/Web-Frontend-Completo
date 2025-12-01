/*
    Literal Types
    - Definimos tipos os valores possivel que uma variavel pode assumir

    let logType: 'info';
    logType = 'warn';
    Aqui estamos dizendo que a variavel logType e do tipo 'info', ou seja, ela so pode receber o valor 'info'.
    Se tentarmos atribuir outro valor, como 'warn', teremos um erro de compilação
*/

// let logType: 'info';
// logType = 'warn';

type Logs = "info" | "warn" | "error";
export function logger(type: Logs, message: string) {
  switch (type) {
    case "info":
      console.log(`Info: ${message}`);
      break;
    case "warn":
      console.warn(`Warn: ${message}`);
      break;
    case "error":
      console.error(`Error: ${message}`);
      break;
  }
}
logger("info", "Teste de log");
