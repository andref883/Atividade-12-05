let numero = parseInt(input("Digite um número positivo: ")); //adicionar o let numero para a pessoa digitar os numeros

while (numero < 0) { // colocar o while para a entrada do valor 
    alert("Numero errado. faça de novo");
    numero = parseInt(prompt("Coloque um numero positivo"));

}
    alert("Você digitou o número certo" + numero);