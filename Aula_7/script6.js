let a, b, res; // Declara três variáveis: a, b e res, sem inicializá-las.
let saida = document.getElementById("saida"); // Seleciona o elemento HTML com ID "saida" e o atribui à variável saida.
a = 9; // Atribui o valor 9 à variável a.
b = 10; // Atribui o valor 10 à variável b.
res = (a < b); // Avalia se a é menor que b e armazena o resultado (true ou false) em res.
saida.innerHTML = `a = ${a} , b = ${b} <br>`; // Atualiza o conteúdo HTML para mostrar os valores de a e b.
saida.innerHTML += `a < b : ${(a < b)} <br>`; // Adiciona ao conteúdo HTML o resultado da comparação a < b.
saida.innerHTML += `!(a < b) : ${!(a < b)}<br>`; // Adiciona o resultado da negação da comparação !(a < b) ao conteúdo HTML.
saida.innerHTML += "res : " + typeof(res); // Adiciona ao conteúdo HTML o tipo da variável res.
