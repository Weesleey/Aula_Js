let a, b, c, d; // Declara quatro variáveis: a, b, c e d, sem inicializá-las.
let saida = document.getElementById("saida"); // Seleciona o elemento HTML com ID "saida" e o atribui à variável saida.
a = 50; // Atribui o valor 50 à variável a.
b = 120; // Atribui o valor 120 à variável b.
c = 200; // Atribui o valor 200 à variável c.
d = (a >= b) || (a <= c); // Verifica se a é maior ou igual a b ou se a é menor ou igual a c; d será verdadeiro se pelo menos uma condição for verdadeira.
saida.innerHTML = `OR d = ${d}`; // Atualiza o conteúdo HTML do elemento saida para mostrar o resultado da expressão lógica em d.
