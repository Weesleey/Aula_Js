let a, b; // Declara duas variáveis: a e b, sem inicializá-las.
let saida = document.getElementById("saida"); // Seleciona o elemento HTML com ID "saida" e o atribui à variável saida.
a = 10; // Atribui o valor 10 à variável a.
b = "10"; // Atribui a string "10" à variável b.

saida.innerHTML = "Igualdade = " + (a == b) + "<br>"; // Verifica se a é igual a b (comparação não estrita) e atualiza o conteúdo HTML.
saida.innerHTML += "Idêntico = " + (a === b) + "<br>"; // Verifica se a é idêntico a b (comparação estrita) e adiciona ao conteúdo HTML.
saida.innerHTML += "Não igual = " + (a != b) + "<br>"; // Verifica se a é diferente de b (comparação não estrita) e adiciona ao conteúdo HTML.
saida.innerHTML += "Não Idêntico = " + (a !== b) + "<br>"; // Verifica se a não é idêntico a b (comparação estrita) e adiciona ao conteúdo HTML.
