// A palavra-chave 'let' é usada para declarar uma variável que pode ser reatribuída.
let numeroDoUsuario = -1; // Inicializa a variável com um valor que garante a entrada no laço
 
// O laço 'while' continuará executando enquanto a condição for verdadeira.
while (numeroDoUsuario !== 0) {
    // Usa prompt() para exibir uma caixa de diálogo e pedir entrada ao usuário.
    // A entrada é sempre uma string, então Number() é usado para converter para um número.
    numeroDoUsuario = Number(prompt("Digite um número (digite 0 para sair):"));
 
    // Verifica se o valor é 0 para não exibir o alerta final se for a saída.
    if (numeroDoUsuario !== 0) {
        // Usa alert() para exibir uma caixa de alerta com a mensagem.
        alert("Você digitou o número: " + numeroDoUsuario);
    }
}
 
// Esta mensagem aparecerá no console do navegador quando o laço terminar.
console.log("Laço de repetição encerrado. O usuário digitou 0.");