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
    let um = Math.trunc(((((valorInput % 100) % 50) % 20) % 10) % 5) / 1;

    resultado.innerHTML= 
    ` foram usadas: <br>
    ${cem} notas de 100R$ <br> 
    ${cinquenta} notas de 50R$ <br>
    ${vinte} notas de 20R$ <br>
    ${dez} notas de 10R$ <br>
    ${cinco} notas de 5R$ <br>
    ${um} notas de 1R$`
   
    e.preventDefault();
});


