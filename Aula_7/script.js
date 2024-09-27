const num1 = parseFloat(prompt("Digite o número1: ")); // Solicita ao usuário que digite o primeiro número e o converte para um número de ponto flutuante.
const num2 = parseFloat(prompt("Digite o número2:")); // Solicita ao usuário que digite o segundo número e o converte para um número de ponto flutuante.
let soma, subt, mult, divi, resto, expo; // Declara variáveis para armazenar os resultados das operações.

soma = num1 + num2; // Calcula a soma de num1 e num2.
subt = num1 - num2; // Calcula a subtração de num1 e num2.
mult = num1 * num2; // Calcula a multiplicação de num1 e num2.
divi = num1 / num2; // Calcula a divisão de num1 por num2.
resto = num1 % num2; // Calcula o resto da divisão de num1 por num2.
expo = num1 ** num2; // Calcula a potência de num1 elevado a num2.

let saida = document.getElementById("saida"); // Seleciona o elemento HTML com ID "saida" e o atribui à variável saida.
saida.innerHTML = "<br>Soma = " + soma; // Atualiza o conteúdo HTML para mostrar o resultado da soma.
saida.innerHTML += "<br>Subtração = " + subt; // Adiciona o resultado da subtração ao conteúdo HTML.
saida.innerHTML += "<br>Multiplicação = " + mult; // Adiciona o resultado da multiplicação ao conteúdo HTML.
saida.innerHTML += "<br>Divisão = " + divi; // Adiciona o resultado da divisão ao conteúdo HTML.
saida.innerHTML += "<br>Resto = " + resto; // Adiciona o resultado do resto da divisão ao conteúdo HTML.
saida.innerHTML += "<br>Expo = " + expo; // Adiciona o resultado da exponenciação ao conteúdo HTML.
