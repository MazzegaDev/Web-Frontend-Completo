let valueUnknown: unknown;
// valueUnknown = [1, 2, 3];
// valueUnknown = {a: 1, b: 2};
// valueUnknown = 'Curso de ts'
valueUnknown = 24.75
//let valueAny: any;

function ProcessData(v: unknown) {
  if (Array.isArray(v)) {
    v.map((x) => {
      console.log(x);
    });
  }

  if(v instanceof Object){
      if('b' in v){
         console.log('b');
      }
  }

  if(typeof v === 'string'){
   console.log(v.toUpperCase());
  }

  if(typeof v === 'number'){
   console.log(v.toFixed())
  }

}

ProcessData(valueUnknown);
