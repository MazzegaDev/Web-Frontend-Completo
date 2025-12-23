function processAndReturn<TypeValue>(value: TypeValue): TypeValue {
  return value;
}

const x = processAndReturn("DayZ");

console.log(x.toLocaleUpperCase());

const y = processAndReturn(2013);

console.log(y.toFixed(2));

function genericProcessor<T>(n: T): T {
  return n;
}

const z = genericProcessor(7);
console.log(z);
