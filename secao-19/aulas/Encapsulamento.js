const Hotel = function(){
    this.nome = 'Hotel do guilherme';
    this.quantidadeSuites = 30;
    let suitesOcupadas = 25;

    this.reservar = function(){
        if(suitesOcupadas < this.quantidadeSuites){
            this.suitesOcupadas++;
            console.log('Ocupadas: ' + suitesOcupadas);
        }else{
            console.log('Estamos lotados');
        }
        
    }
}

const hotel = new Hotel();

const produto = new Produto();
