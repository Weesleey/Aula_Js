let a, b; // Declara duas variáveis: a e b, sem inicializá-las.
let saida = document.getElementById("saida"); // Seleciona o elemento HTML com ID "saida" e o atribui à variável saida.
a = prompt("Digite o nome"); // Solicita ao usuário que digite um nome e armazena na variável a.
b = prompt("Digite o sobrenome"); // Solicita ao usuário que digite um sobrenome e armazena na variável b.
saida.innerHTML = `${a} ${b}`; // Atualiza o conteúdo HTML para mostrar o nome e sobrenome inseridos pelo usuário.
b += " "; // Adiciona um espaço à variável b.
b += a; // Concatena o nome a ao sobrenome b.
saida.innerHTML += `<br>${b}`; // Adiciona ao conteúdo HTML a nova string com o sobrenome seguido do nome.
