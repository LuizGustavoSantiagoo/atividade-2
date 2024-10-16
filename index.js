let valor = document.getElementById("valor");
let form = document.getElementById("formulario");
let resultado = document.getElementById("resultado");  

form.addEventListener('submit', function(e) {
    let valorInput = valor.value;
    let cem = Math.trunc(valorInput / 100);
    let cinquenta = Math.trunc((valorInput % 100) / 50);
    let vinte = Math.trunc(((valorInput % 100) % 50) / 20);
    let dez = Math.trunc((((valorInput % 100) % 50) % 20) / 10);
    let cinco = Math.trunc(((((valorInput % 100) % 50) % 20) % 10) / 5);
    let dois = Math.trunc((((((valorInput % 100) % 50) % 20) % 10) % 5)/ 2);
    let um = Math.trunc((((((valorInput % 100) % 50) % 20) % 10) % 5) % 2) / 1;

    resultado.innerHTML= 
    `
    <p>${cem} notas de 100R$</p>
    <p>${cinquenta} notas de 50R$</p> 
    <p>${vinte} notas de 20R$ </p>
    <p>${dez} notas de 10R$ </p>
    <p>${cinco} notas de 5R$</p> 
    <p>${dois} notas de 2R$ </p>
    <p>${um} notas de 1R$</p> `
   
    e.preventDefault();
});


