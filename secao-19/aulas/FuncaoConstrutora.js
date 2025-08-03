/*
    Funcao construtoras
*/

class Produto{

}

const Hotel = function(){
    this.nome = 'Hotel do guilherme';
    this.quantidadeSuites = 30;
    this.suitesOcupadas = 25;

    this.reservar = function(){
        this.suitesOcupadas++;
        console.log('Ocupadas: ' + this.suitesOcupadas);
    }
}

const hotel = new Hotel();

const produto = new Produto();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();