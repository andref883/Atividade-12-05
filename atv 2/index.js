let soma = 0;
let quantidade = 0;
let continuar = true;

while (continuar) { // o while está sendo utilizados 
    let nota = parseFloat(prompt("Digite uma nota entre 0 e 10 (ou número negativo para sair):"));

    if (nota < 0) { //if para colocar a nota <0
        continuar = false;
    } else if (nota <= 10) {
        soma += nota;
        quantidade++;
    } else { // o else está sendo usado para a soma += nota 
        alert("Nota inválida. Digite um valor entre 0 e 10.");
    }
}

if (quantidade > 0) {
    let media = soma / quantidade;
    alert("Média das notas: " + media.toFixed(2));
} else {
    alert("Nenhuma nota válida foi digitada.");
}