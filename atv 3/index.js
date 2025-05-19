let soma = 0;
let valor = -1; // valor inicial diferente de 0 para entrar no while

while (valor !== 0) {
  const entrada = prompt("Digite o valor da compra (0 para encerrar):"); // colocamos o while para a entrada do valor do compra 
  valor = Number(entrada);

  if (isNaN(valor) || valor < 0) {
    alert("Entrada inválida. Digite um número positivo ou 0 para encerrar.");
  } else if (valor > 0) { // utilizamos o else if para colocar o valor 
    soma += valor;
  }
}

alert(`Total da compra: R$ ${soma.toFixed(2)}`);
