let a, b, c; // Declara três variáveis: a, b e c, sem inicializá-las.
let saida = document.getElementById("saida"); // Seleciona o elemento HTML com ID "saida" e o atribui à variável saida.
a = 10; // Atribui o valor 10 à variável a.
b = 10; // Atribui o valor 10 à variável b.
c = 11; // Atribui o valor 11 à variável c.
saida.innerHTML = "Menor = " + (a < b) + "<br>"; // Atualiza o conteúdo HTML para mostrar se a é menor que b.
saida.innerHTML += "Menor ou igual = " + (a <= b) + "<br>"; // Adiciona o resultado da comparação se a é menor ou igual a b.
saida.innerHTML += "Maior = " + (c > b) + "<br>"; // Adiciona o resultado da comparação se c é maior que b.
saida.innerHTML += "Maior ou igual = " + (c >= b) + "<br>"; // Adiciona o resultado da comparação se c é maior ou igual a b.
