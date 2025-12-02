//Falsy
// console.log(false ? 'Truthy' : 'Falsy')
// console.log(0 ? 'Truthy' : 'Falsy')
// // console.log(null ? "Truthy" : "Falsy");
// // console.log(undefined ? "Truthy" : "Falsy");
// console.log(NaN ? "Truthy" : "Falsy");


// //Truthy
// console.log(true ? 'Truthy' : 'Falsy');
// console.log(-1 ? "Truthy" : "Falsy");
// console.log(' ' ? "Truthy" : "Falsy");
// console.log([] ? "Truthy" : "Falsy");
// console.log({} ? "Truthy" : "Falsy");


const movies = ["M1", "M2"];
const movie = movies.find(x => x.includes('M21'));
//console.log(movie);

//Type guard
if(movie){
   console.log(movie);
}else{
   console.warn('Filme nao localizado')
}