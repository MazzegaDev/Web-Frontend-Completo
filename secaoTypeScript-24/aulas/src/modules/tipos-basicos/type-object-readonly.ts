/*
    Readonly em Objetos
    O readonly tem o mesmo objetivo que em arrays, ou seja, impedir a alteração de propriedades de um objeto.

    Para utilizar o readonlym em objeto, voce deve seguir a seguinte sintaxe:
    type Movie = {
        readonly title: string;
    };



*/

type Movie = {
  readonly title: string;
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
  //   movies.movie1.title = "Teste";
  console.log(movies);
}
showMovies(movies);
