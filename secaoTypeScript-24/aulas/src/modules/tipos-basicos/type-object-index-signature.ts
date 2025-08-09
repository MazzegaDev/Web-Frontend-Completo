/* 
    Type object - index signature
    Essa abordagem e utilizada quando nao sabemos a estrutura completa de um objeto e quando nao queremos ‘engessar’ esse objeto e sim deixar-lo mais flexivel.

    O index signtature e usado para tipar objetos que nao possuem uma forma unica

    -Sintase-
    O index signature e defino por colchetes e a palavra 'key'
    [key]
    Dentro dos colchetes podemos definir os possiveis tipos que a key pode ser:
    [key: string | number]
    E fora dos colchetes podemos definir o tipo de valor que pode ser:
    [key: string | number] : string | number | boolean;

    -Exemplo-
    type Movie = {
        title: string;
        year: number;
        
        Nessa linhas estamos dizendo que ele pode ter um atributo nao conhecido, e que sua chave pode ser uma string ou um numero, e seu valor de chave uma string,number ou boolean
        [key: string | number]: string | number | boolean;
    };

    Aqui estamos dando um alias para o tipo Movies que recebe um objeto. E seu objeto pode ter uma key desconhecida que pode ser do tipo string, e seu valor do tipo Movie que tipamos anteriormente 
    type Movies = {
        [key: string]: Movie
    }

    let movies = {
    movie1: {
        title: "A origem",
        year: 2010,
        isFavorite: true,
        genre: "Ficcao cientifica",
        director: "Christopher Nolan",
    },
    movie2: {
        title: "Um sonho de liberdade",
        year: 1994,
        isFavorite: true,
        genre: "Drama",
        runtime: 142,
    },
    movie3: {
        title: "The Godfather",
        year: 1972,
        isFavorite: false,
        genre: "Crime",
    },
    };

    export function showMovies(movies: Movies) {
    console.log(movies);
    }

    showMovies(movies);

    Dessa forma, flexibilizamos a tipagem dos objetos Movie, permitindo que cada um deles tenha propriedades adicionais além das obrigatórias (title e year), desde que os valores dessas propriedades sejam do tipo string, number ou boolean. E também, o tipo Movies permite armazenar múltiplos filmes com identificadores dinâmicos como movie1, movie2, etc.

*/

// Fetch endpoint /movies
type Movie = {
  title: string;
  year: number;
  [key: string | number]: string | number | boolean;
};

type Movies = {
  [key: string]: Movie;
};

let movies = {
  movie1: {
    title: "A origem",
    year: 2010,
    isFavorite: true,
    genre: "Ficcao cientifica",
    director: "Christopher Nolan",
  },
  movie2: {
    title: "Um sonho de liberdade",
    year: 1994,
    isFavorite: true,
    genre: "Drama",
    runtime: 142,
  },
  movie3: {
    title: "The Godfather",
    year: 1972,
    isFavorite: false,
    genre: "Crime",
  },
};

export function showMovies(movies: Movies) {
  console.log(movies);
}

showMovies(movies);
