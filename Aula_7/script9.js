let a, b, c, d, e; // Declara cinco variáveis: a, b, c, d e e, sem inicializá-las.
let saida = document.getElementById("saida"); // Seleciona o elemento HTML com ID "saida" e o atribui à variável saida.
a = 50; // Atribui o valor 50 à variável a.
b = 120; // Atribui o valor 120 à variável b.
c = 200; // Atribui o valor 200 à variável c.
d = (a <= b) ? "Verdadeiro" : "Falso"; // Verifica se a é menor ou igual a b; se sim, d recebe "Verdadeiro", caso contrário "Falso".
e = (a >= c) ? "Verdadeiro" : "Falso"; // Verifica se a é maior ou igual a c; se sim, e recebe "Verdadeiro", caso contrário "Falso".
f = (a%2==0) ? "Par" : "Impar";
saida.innerHTML = `d = ${d}<br>`; // Atualiza o conteúdo HTML do elemento saida para mostrar o valor de d, seguido de uma quebra de linha.
saida.innerHTML += `e = ${e}<br>`; // Adiciona o valor de e ao conteúdo existente do elemento saida.
saida.innerHTML += `a = ${a} - é ${f}`;