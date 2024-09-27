let a; // Declara uma variável a, sem inicializá-la.
let saida = document.getElementById("saida"); // Seleciona o elemento HTML com ID "saida" e o atribui à variável saida.
a = parseInt(prompt("Digite um número")); // Solicita ao usuário que digite um número e o converte para um inteiro, armazenando em a (ex: 100).
saida.innerHTML = "a = " + (++a); // Incrementa a em 1 (pré-incremento) e atualiza o conteúdo HTML para mostrar o novo valor de a.
saida.innerHTML += "<br>a final = " + a; // Adiciona ao conteúdo HTML o valor final de a após o incremento.
