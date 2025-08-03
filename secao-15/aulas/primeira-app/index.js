// alert("Tudo bem guilherme")

var hora = new Date().getHours();
var saudacao;

if(hora < 12){
    saudacao = 'Bom dia';
}else if(hora < 18){
    saudacao = 'Boa tarde';
}else{
    saudacao = 'Boa noite';
}


// document.getElementById('msg').innerHTML = saudacao;