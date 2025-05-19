function solicitarNome(mensagem) {
  let nome = null; // o let nome usado para o igual o null
  do {
    nome = prompt(mensagem);
  } while (!nome || nome.trim().length === 0); // o while usado para diferenciar os nomes 
  return nome.trim();
}

const nomeUsuario = solicitarNome("Informe seu nome:"); // as const utilizadas para informar seu nome e sobrenome 
const sobrenomeUsuario = solicitarNome("Informe seu sobrenome:");

alert(`Olá, ${nomeUsuario} ${sobrenomeUsuario}!`);