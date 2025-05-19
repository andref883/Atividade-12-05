let saldo = 1000; // Saldo inicial
const prompt = require("prompt-sync")(); // Para entrada no terminal (Node.js)

while (saldo > 0) {
    console.log(`\nSaldo atual: R$${saldo}`);
    let saque = parseFloat(prompt("Digite o valor que deseja sacar: "));

    if (isNaN(saque) || saque <= 0) {
        console.log("Digite um valor para saque.");
        continue;
    }

    if (saque > saldo) {
        console.log("Saldo sem nada. Tente um valor menor você é pobre.");
    } else {
        saldo -= saque;
        console.log(`Saque de R$${saque} realizado com sucesso.`);
    }
}

console.log("Saldo esgotado. Ficou pobre.");
